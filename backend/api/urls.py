from django.urls import path

from .views import ProductsApiView, ProductsListCreateApiView

app_name = 'api'

urlpatterns = [
    path('products_with_generic_view/', ProductsListCreateApiView.as_view()),  # Первый вариант решения
    path('products_with_base_view/', ProductsApiView.as_view()),  # Второй вариант решения
]
