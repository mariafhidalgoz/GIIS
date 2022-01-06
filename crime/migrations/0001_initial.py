# Generated by Django 3.1 on 2022-01-06 14:30

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crime',
            fields=[
                ('crime_id', models.AutoField(primary_key=True, serialize=False)),
                ('month', models.CharField(max_length=500)),
                ('reported_by', models.CharField(max_length=500)),
                ('falls_within', models.CharField(max_length=500)),
                ('longitude', models.CharField(max_length=500)),
                ('latitude', models.CharField(max_length=500)),
                ('location', models.CharField(max_length=500)),
                ('lsoa_code', models.CharField(max_length=500)),
                ('lsoa_name', models.CharField(max_length=500)),
                ('crime_type', models.CharField(max_length=500)),
                ('last_outcome_category', models.CharField(max_length=500)),
                ('context', models.CharField(max_length=500)),
                ('geom_point', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
        ),
        migrations.CreateModel(
            name='Crimebarchart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('month', models.CharField(max_length=500)),
                ('force_type', models.CharField(max_length=500)),
                ('count', models.IntegerField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Crimepiechart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('month', models.CharField(max_length=500)),
                ('crime_type', models.CharField(max_length=500)),
                ('count', models.IntegerField(max_length=50)),
            ],
        ),
    ]