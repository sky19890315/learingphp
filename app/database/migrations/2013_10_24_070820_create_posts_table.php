<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration {

	public function up()
	{
		Schema::create('posts',function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('author')->default('admin');
			$table->longtext('post_content');
			$table->text('post_title');
			$table->integer('zcolumns_id')->unsigned()->default('1');
			$table->timestamps();	

		});
	}

	public function down()
	{
		Schema::drop('posts');
	}

}