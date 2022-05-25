from rest_framework import serializers
from ..models import Rating

class RateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = '__all__'
        read_only_fields = ('user', 'movie',)