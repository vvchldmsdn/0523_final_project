import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_back.settings")

import django
django.setup()

from django.shortcuts import get_object_or_404

from movies.models import Movie, Genre

from movies.serializers.rate_serializers import RateSerializer
from movies.serializers.movie_serializers import MovieRecomSerializer
from .cos_algorithms import feats, pposi, sep, make_matrix, cos_sim, np_arrs

from numpy import dot 
from numpy.linalg import norm 
import numpy as np
from pprint import pprint


def wrcos(a):  # a는 movie id들이 담겨있는 리스트 / 중복되는 id 없음
    high_rated_movies_overview = ''

    for movie_id in a:
        movie = get_object_or_404(Movie, pk=movie_id)
        serializer = MovieRecomSerializer(movie)
        data = serializer.data

        actor_str = ''
        actors = data['actor_ids']
        for actor in actors:
            actor_str += actor['name']
        
        director_str = ''
        directors = data['director_ids']
        for director in directors:
            director_str += director['name']
        
        tmp = data['tagline'] + data['overview'] + data['title'] + actor_str + director_str
        high_rated_movies_overview += tmp

    # high_rated_movies_overview는 8점 이상 준 영화의 모든 문자열 다 합친 것
    target_np_arr = [(0, np.array(make_matrix(feats, sep(high_rated_movies_overview))))]

    result = dict()

    # print(type(np_arrs[0]), type(np_arrs), len(np_arrs[0]))
    # print(len(target_np_arr), type(target_np_arr))
    for np_arr in np_arrs:
        if np_arr[0] not in a:  # 이미 평점 8점 이상 준 영화는 안 보이게 함
            similarity = cos_sim(target_np_arr[0][1], np_arr[1])
            result[np_arr[0]] = similarity

    return result


# pprint(f'wrcos = {wrcos([671, 672])}')