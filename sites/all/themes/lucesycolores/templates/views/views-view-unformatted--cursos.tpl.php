<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
$group_nr = 1;                  // first group number
$last_row = count($rows) -1;    // last row
$wrapper  = 3;                  // put a wrapper around every 3 row
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
	<?php if ($id % $wrapper == 0) {print '<div class="w-row group group-'.$group_nr.'">'; $i = 0; $group_nr++; } ?>
	  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
	    <?php print $row; ?>
	  </div>
	<?php $i++; if ($i == $wrapper || $id == $last_row) print '</div>'; ?>
<?php endforeach; ?>


