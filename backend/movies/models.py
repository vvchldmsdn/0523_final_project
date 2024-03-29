from turtle import ondrag
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Genre(models.Model):
    name = models.TextField()


class Spokenlanguage(models.Model):
    name = models.CharField(max_length=20)


class Productioncountry(models.Model):
    name = models.CharField(max_length=20)


class Collection(models.Model):
    name = models.CharField(max_length=40)


class Actor(models.Model):
    name = models.CharField(max_length=20)


class Director(models.Model):
    name = models.CharField(max_length=20)


class Movie(models.Model):
    title = models.CharField(max_length=20)
    poster_path = models.TextField()
    overview = models.TextField()
    tagline = models.TextField()
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    genre_ids = models.ManyToManyField(Genre, related_name='movie_genre')
    language_ids = models.ManyToManyField(Spokenlanguage, related_name='movie_spokenlanguage')
    productioncountry_ids = models.ManyToManyField(Productioncountry, related_name='movie_productioncountry')
    collection_ids = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='movies')
    actor_ids = models.ManyToManyField(Actor, related_name='movie_actor')
    director_ids = models.ManyToManyField(Director, related_name='movie_director')

    def __str__(self):
        return self.title


class Rating(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='ratings')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')
    rates = models.PositiveIntegerField(default=10, validators=[MinValueValidator(1), MaxValueValidator(10)])


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='movie_comments')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='movie_comments')
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)