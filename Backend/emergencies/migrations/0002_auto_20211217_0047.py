# Generated by Django 3.1 on 2021-12-16 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emergencies', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incident',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='policestation',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
