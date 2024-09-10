from rest_framework import generics, status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer


# Первый вариант решения
class ProductsListCreateApiView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        # Дополнительная проверка для поля price

        price = serializer.validated_data.get('price')
        # проверка, что цена положительная
        if price <= 0:
            print(type(price))
            raise ValidationError({"price": ["Цена должна быть положительным числом."]})
        serializer.save()


# Второй вариант решения
class ProductsApiView(APIView):
    def get(self, request):
        products = Product.objects.all()
        return Response({'products': ProductSerializer(products, many=True).data})

    def post(self, request):
        raw_data = request.data
        product_serializer = ProductSerializer(data=raw_data)
        product_serializer.is_valid(raise_exception=True)

        # Дополнительная проверка для поля price

        price = product_serializer.validated_data.get('price')
        # проверка, что цена положительная
        if price <= 0:
            print(type(price))
            raise ValidationError({"price": ["Цена должна быть положительным числом."]})

        product_serializer.save()
        return Response({'product': product_serializer.data})
