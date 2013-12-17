<?php get_header(); ?>

<?php $args = array( 'post_type' => 'trips', 'posts_per_page' => 4 );

	$loop = new WP_Query( $args );  ?>

		<div id="radSlider" class="postContainer">

			<div class="active rad-slide" style="background-image: url(http://www.dirtmiles.com/wp-content/themes/motorSportClub/img/grandCanyonP7_MindBlown.jpg);">&nbsp</div>

			<?php while ( $loop->have_posts() ) : $loop->the_post(); $randomPictures = rand(1,10); ?>

			<div class="rad-slide" style="background-image: url(<?php the_field('trip_picture_' . $randomPictures);?>);">&nbsp</div>

			<?php endwhile; ?>

		</div>

<?php if(have_posts()) : while ( have_posts()) : the_post(); ?>

	<div class="postContainer">

		<h3><?php the_date('M d', '<div class="theDate">', '</div>');?><a href="<?php the_permalink();?>">
		<?php the_title(); ?></a></h3> 

		<?php the_post_thumbnail('thumbnail'); ?>

		<?php the_content(); ?>

		<div class="postFooter">

		<p>Author : <?php the_author() ?></p><a href="<?php comments_link(); ?>">Discussion</a>
		
		</div>

	</div>

<?php endwhile; else: ?>

	<p>There are no posts here</p>

<?php endif; ?>
<?php get_footer(); ?>
