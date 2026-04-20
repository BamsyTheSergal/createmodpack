// priority: 0
// ae
// Visit the wiki for more info - https://kubejs.com/
ServerEvents.tags('item', event => {
  // Add items to tags
  event.add('minecraft:sponge_crafting_material', 'minecraft:tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:horn_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_horn_coral_block')

  event.add('sliceanddice:allowed_tools', '#minecraft:pickaxes')
  // Remove items from tags
  event.remove('minecraft:coral_blocks', 'minecraft:tube_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:brain_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:bubble_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:fire_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:horn_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_tube_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_brain_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_bubble_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_fire_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_horn_coral_block')
});
ServerEvents.recipes(event => {
  event.shapeless('minecraft:sponge', ['#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material']).id('bamsy:coral_to_sponge');
  event.shapeless('farmersdelight:rich_soil_farmland', ['farmersdelight:rich_soil', '#minecraft:hoes']).id('bamsy:hoe_richsoil_to_richfarmland');
});
ServerEvents.recipes(event => {
  event.shapeless('kubejs:blaze_rod_block', ['minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod']).id('bamsy:blaze_rods_to_block_bamsy');
  event.shapeless('9x minecraft:blaze_rod', ['kubejs:blaze_rod_block']).id('bamsy:blaze_block_to_rods_bamsy');

  event.shapeless('kubejs:book_block', ['minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book']).id('bamsy:books_to_block_bamsy');
  event.shapeless('9x minecraft:book', ['kubejs:book_block']).id('bamsy:book_block_to_books_bamsy');
});
