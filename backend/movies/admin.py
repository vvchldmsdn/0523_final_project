from django.contrib import admin
from .models import Movie, Genre, Actor, Director, Rating, Comment
# Register your models here.


admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Actor)
admin.site.register(Director)
admin.site.register(Rating)
admin.site.register(Comment)