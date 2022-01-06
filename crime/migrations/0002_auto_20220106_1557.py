# Generated by Django 3.1 on 2022-01-06 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crime', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bargraph',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('month', models.CharField(max_length=500)),
                ('force_type', models.CharField(max_length=500)),
                ('count', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Piechart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('month', models.CharField(max_length=500)),
                ('crime_type', models.CharField(max_length=500)),
                ('count', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Crimebarchart',
        ),
        migrations.DeleteModel(
            name='Crimepiechart',
        ),
    ]