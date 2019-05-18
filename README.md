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
##user
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,unique: true|
|name|string|null: false,unique: true|
|e-mail|string|null: false,unique: true|
|pass_1|string|null: false|
|pass_2|string|null: false|

### Association
- has_meny :tweets


##tweets
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false,unique: true,foreign_key: true|
|text|text|null: false|
|pic|text||

### Association
- belongs_to :group
- belongs_to :user

##group
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,unique: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- has_meny :user


##user_group
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,unique: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user