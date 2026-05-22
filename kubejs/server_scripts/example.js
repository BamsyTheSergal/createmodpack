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
  event.add('createaddition:plants','farmersdelight:straw')
  event.add('c:ingots','createpropulsion:platinum_ingot')
  event.add('c:nuggets','createpropulsion:platinum_nugget')
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
  event.shaped('sophisticatedbackpacks:backpack', ['ABA', 'ACA', 'BBB'], { A: 'minecraft:string', B: 'farmersdelight:canvas', C: 'minecraft:chest' }).id('shadoukube:canvas_backpack');

  event.shapeless('kubejs:book_block', ['minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book']).id('bamsy:books_to_block_bamsy');
  event.shapeless('9x minecraft:book', ['kubejs:book_block']).id('bamsy:book_block_to_books_bamsy');
  event.shapeless('createpropulsion:platinum_ingot', ['createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget', 'createpropulsion:platinum_nugget']).id('bamsy:platinum_nugget_to_ingot');
  event.recipes.create.compacting(['3x create:crushed_raw_platinum', CreateItem.of('create_simple_ore_doubling:slag', 0.15)], 'createpropulsion:raw_platinum').heated();
  event.recipes.create.crushing(CreateItem.of('minecraft:gunpowder', 0.03), 'supplementaries:flint_block');
});
ServerEvents.recipes(event => {
  event.remove({mod: 'create_jetpack'})
});

ServerEvents.recipes(event => {
  event.recipes.create.crushing(['silentgear:crushed_shulker_shell', CreateItem.of('silentgear:crushed_shulker_shell', 0.5), CreateItem.of('minecraft:shulker_shell', 0.05)], 'minecraft:shulker_shell');
  event.recipes.create.crushing(['18x minecraft:sugar', CreateItem.of('3x minecraft:sugar', 0.9), CreateItem.of('3x minecraft:sugar', 0.6), CreateItem.of('3x minecraft:sugar', 0.3)], 'quark:sugar_cane_block')
});


ServerEvents.recipes(event => {
  // Add a mechanical crafting recipe
  event.recipes.createMechanicalCrafting(
    Item.of('create_jetpack:jetpack'),
                                         [
                                           " PSP ",
                                         "PYXYP",
                                         "PCECP",
                                         " C C "
                                         ],
                                         {
                                           E: '#c:armors/elytra',
                                           C: 'create:chute',
                                           X: 'create:copper_backtank',
                                           S: 'create:shaft',
                                           Y: 'create:precision_mechanism',
                                           P: '#c:plates/brass'
                                         }
  )
});
ServerEvents.recipes(event => {
  event.smithing(
    'create_jetpack:netherite_jetpack',  // output item
    'create_jetpack:jetpack',    // base item
    'minecraft:netherite_ingot'   // addition item
  )
  event.custom({
    "type": "create_dragons_plus:coloring",
    "color": "white",
    "ingredients": [
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "id": "biomesoplenty:white_sand"
      }
    ]
  }).id('bamsy:sand_to_white_sand');
  event.custom({
    "type": "create_dragons_plus:coloring",
    "color": "orange",
    "ingredients": [
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "id": "biomesoplenty:orange_sand"
      }
    ]
  }).id('bamsy:sand_to_orange_sand');
  event.custom({
    "type": "create_dragons_plus:coloring",
    "color": "black",
    "ingredients": [
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "id": "biomesoplenty:black_sand"
      }
    ]
  }).id('bamsy:sand_to_black_sand');
});


