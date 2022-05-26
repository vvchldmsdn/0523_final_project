from .models import Movie, Genre, Comment, Rating
from django.shortcuts import render, get_list_or_404, get_object_or_404
from .serializers.movie_serializers import MovieSerializer, MovieCosSerializer, MovieGenreSerializer, MovieLanguageSerializer
from .serializers.genre_serializers import GenreSerializer
from .serializers.comment_serializers import CommentSerializer
from .serializers.rate_serializers import RateSerializer
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from pprint import pprint
from algorithms import cos_algorithms, wr_algorithms, wrcos_algorithms


# Create your views here.
@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def index(request):
    movies = get_list_or_404(Movie)
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def recom(request, movie_pk):
    result = []
    cos_similarities = cos_algorithms.cosine_sim_dict[movie_pk]  # 딕셔너리
    for id in cos_similarities:
        if cos_similarities[id] >= 0.12:
            tmp_movie = get_object_or_404(Movie, pk=id)
            tmp_serializer = MovieSerializer(tmp_movie)
            tmp_serializer_dict = dict(tmp_serializer.data)
            tmp_serializer_dict['cos_sim'] = cos_similarities[id]
            result.append(tmp_serializer_dict)
    return Response(result)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def genre_recom(request, genre_pk):
    result = []
    weighted_ratings = wr_algorithms.weighted_ratings

    for id, ratings in weighted_ratings:
        tmp_movie = get_object_or_404(Movie, pk=id)
        tmp_serializer = MovieGenreSerializer(tmp_movie)
        if genre_pk in tmp_serializer.data['genre_ids']:
            result.append(tmp_serializer.data)
        if len(result) == 20:
            break
    return Response(result)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def user_interest(request, language_pk):
    result = []
    weighted_ratings = wr_algorithms.weighted_ratings
    for id, rating in weighted_ratings:
        tmp_movie = get_object_or_404(Movie, pk=id)
        tmp_serializer = MovieLanguageSerializer(tmp_movie)
        if language_pk in tmp_serializer.data['language_ids']:
            result.append(tmp_serializer.data)
    return Response(result)


@api_view(['POST'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def create_comment(request, movie_pk):
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie, user=user)
        comments = movie.movie_comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def comment_update_or_delete(request, movie_pk, comment_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    def update_comment():
        if request.user == comment.user:
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = movie.movie_comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)

    def delete_comment():
        if request.user == comment.user:
            comment.delete()
            comments = movie.movie_comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)
    
    if request.method == 'PUT':
        return update_comment()
    elif request.method == 'DELETE':
        return delete_comment()


@api_view(['GET', 'POST', 'DELETE'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def rate_list_create(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    tmp = movie.ratings.filter(user_id=user.pk)

    def rate_list():
        result = dict()
        ratings = movie.ratings.all()
        serializer = RateSerializer(ratings, many=True)
        total_len = len(serializer.data)
        sum_rates = 0
        for info in serializer.data:
            sum_rates += info['rates']
        if total_len:
            average_rates = round(sum_rates / total_len, 2)
            result['rate_average'] = average_rates
        else:
            result['rate_average'] = '아직 평점이 없습니다ㅠㅠ'
        return Response(result)

    def rate_create():
        serializer = RateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, movie=movie)
            return Response(serializer.data)

    def rate_delete():
        tmp.delete()
        ratings = movie.ratings.all()
        serializer = RateSerializer(ratings, many=True)
        Response(serializer.data)

    if request.method == 'GET':
        return rate_list()
    elif request.method == 'POST':
        if len(tmp) == 0:
            return rate_create()
        elif len(tmp) == 1:
            tmp.delete()
            return rate_create()
    elif request.method == 'DELETE':
        if len(tmp) == 1:
            return rate_delete()


# @api_view(['PUT', 'DELETE'])
# def rate_update_delete(request, movie_pk):
#     movie = get_object_or_404(Movie, pk=movie_pk)

#     def rate_update():
#         rating = movie.


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def rated_check(request, movie_pk):  # 영화에 평점 줬으면 True, 아니면 False넣어서 응답
    movie = get_object_or_404(Movie, pk=movie_pk)
    ratings = movie.ratings.all()
    serializer = RateSerializer(ratings, many=True)
    rating_data = serializer.data

    result = {'check': False}
    for info in rating_data:
        if request.user.id == info['user']:
            result['check'] = True
            break
    return Response(result)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def test(request):
    result = {'like_movies': []}
    rating = request.user.ratings.all()
    serializer = RateSerializer(rating, many=True)
    rating_infos = serializer.data

    for info in rating_infos:
        if info['rates'] >= 7:
            result['like_movies'].append(info['movie'])

    return Response(result)


@api_view(['GET'])
# @authentication_classes([JSONWebTokenAuthentication])
# @permission_classes([IsAuthenticated])
def default_recom(request):
    ratings = request.user.ratings.all()
    serializer = RateSerializer(ratings, many=True)

    high_rate_movies = []
    for info in serializer.data:
        if info['rates'] >= 8:
            high_rate_movies.append(info['movie'])

    def high_rate_exist():
    # 이 다음 wrcos_algorithms.py에 있는 함수에 high_rate_movies를 입력변수로 넘김
        tmp_result = wrcos_algorithms.wrcos(high_rate_movies)

        tmp_result2 = []
        for wr in wr_algorithms.weighted_ratings:
            if wr[0] in tmp_result:
                tmp_result2.append((wr[0], 20 * tmp_result[wr[0]] + wr[1]))
        tmp_result2.sort(key= lambda x: x[1], reverse=True)  # 점수 높은거 순으로 (id, 점수)들이 들어있음

        result = []
        for id, rating in tmp_result2:
            tmp_movie = get_object_or_404(Movie, pk=id)
            tmp_serializer = MovieSerializer(tmp_movie)
            result.append(tmp_serializer.data)

        return Response(result)
    
    def didnt_rate():
        result = []
        top_twenty = wr_algorithms.weighted_ratings[:20]  # 상위 20개 영화
        for id, rating in top_twenty:
            tmp_movie = get_object_or_404(Movie, pk=id)
            tmp_serializer = MovieSerializer(tmp_movie)
            result.append(tmp_serializer.data)
        return Response(result)


    if len(serializer.data) == 0:
        return didnt_rate()
    else:
        if len(high_rate_movies) >= 1:
            return high_rate_exist()
        else:
            return didnt_rate()


# def search(request):
#     movie = get_list_or_404(Movie)
#     serializer = MovieSerializer(movie, many=True)
