from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.serializers.rate_serializers import RateSerializer
from ..models import Movie, Actor, Director, Genre
from .comment_serializers import CommentSerializer


User = get_user_model()

class MovieSerializer(serializers.ModelSerializer):
    class ActorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Actor
            fields = ('name',)

    class DirectorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Director
            fields = ('name',)
    
    class GenreNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Genre
            fields = ('name',)

    actor_ids = ActorNameSerializer(many=True, read_only=True)
    director_ids = DirectorNameSerializer(many=True, read_only=True)
    genre_ids = GenreNameSerializer(many=True, read_only=True)
    movie_comments = CommentSerializer(many=True, read_only=True)
    ratings = RateSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'


# ..algorithms.py에 json으로 데이터 주기 위한 serilaizer
class MovieCosSerializer(serializers.ModelSerializer):

    class ActorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Actor
            fields = ('name',)
    

    class DirectorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Director
            fields = ('name',)


    actor_ids = ActorNameSerializer(many=True, read_only=True)
    director_ids = DirectorNameSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'


# 장르 별 추천 목록에 쓰기 위함
class MovieGenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'poster_path', 'title', 'genre_ids',)


# 언어 별 추천 목록에 쓰기 위함
class MovieLanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'poster_path', 'title', 'language_ids',)


class MovieRecomSerializer(serializers.ModelSerializer):

    class ActorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Actor
            fields = ('name',)
    

    class DirectorNameSerializer(serializers.ModelSerializer):

        class Meta:
            model = Director
            fields = ('name',)


    actor_ids = ActorNameSerializer(many=True, read_only=True)
    director_ids = DirectorNameSerializer(many=True, read_only=True)


    class Meta:
        model = Movie
        fields = ('id', 'title', 'overview', 'tagline', 'actor_ids', 'director_ids',)