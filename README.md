# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## users
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique: true|
|e-mail|string|null: false,unique: true|

### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users



## groups
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique: true|

### Association
- has_many :messages
- has_many :users, through: :group_users
- has_many :group_users



##users_groups
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



## messages
|Column|Type|Options|
|------|----|-------|
|text|text||
|pic|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user





