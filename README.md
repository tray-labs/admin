# TrayLabs Admin

Admin dashboard for startups based in [locawebstyle-tray](https://github.com/tray-tecnologia/locawebstyle-tray).

## Installation

You must install TrayLabs Admin by composer:

```sh
$ composer create-project --prefer-dist tray-labs/admin /path/to/project
```

Or download a [zip file](https://github.com/tray-labs/admin/archive/master.zip).

**Create TrayLabs Admin database:**
```sql
CREATE DATABASE admin;
```

**Setup .env file for database access.**

**Install php dependencies:**

```sh
$ composer install
```

**Install javascript dependencies:**

```sh
$ yarn
```

**Run npm to compile:**
```sh
$ npm run dev
```

**Run migrations:**
```sh
$ php artisan migrate
```

## Configuration

By default, the namespace's project is `TrayLabs\Admin`.
If you want, you can change manually the namespace:

* https://github.com/tray-labs/admin/blob/master/composer.json#L27
* https://github.com/tray-labs/admin/blob/master/app/Http/Controllers/Auth/RegisterController.php#L5
* https://github.com/tray-labs/admin/blob/master/app/Http/Controllers/Auth/RegisterController.php#L61
* https://github.com/tray-labs/admin/blob/master/config/auth.php#L70
* https://github.com/tray-labs/admin/blob/master/config/services.php#L33
* https://github.com/tray-labs/admin/blob/master/database/factories/ModelFactory.php#L15

Run composer for update namespace:
```sh
$ composer dump
```

## License

This project is licensed under the MIT License.