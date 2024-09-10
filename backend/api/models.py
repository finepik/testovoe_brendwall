from django.db import models


class Product(models.Model):
    """
    Модель Product представляет товар, который можно продавать в интернет-магазине

    """

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"

    name = models.CharField(max_length=100, verbose_name='Название')
    description = models.TextField(null=False, blank=True, verbose_name='Описание')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')

    def __str__(self) -> str:
        return self.name
