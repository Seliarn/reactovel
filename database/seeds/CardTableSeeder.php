<?php

use App\Models\Card;
use Illuminate\Database\Seeder;

class CardTableSeeder extends Seeder
{
    private $_base = [
        [
            'title' => 'Vabjorn',
            'spell' => 'Deal 2 damage to an enemy. If the unit was already damaged, destroy it instead.',
            'type' => Card::TYPE_GOLD,
            'faction' => Card::FACTION_SKELLIGE,
            'image' => 'https://media-seawolf.cursecdn.com/avatars/thumbnails/15/212/800/1048/50220icon.png',
            'power' => 11,
            'defense' => 0,
            'group' => null
        ],
        [
            'title' => 'False Ciri',
            'spell' => 'Spying. If Spying, boost self by 1 on turn start and when this player passes, move to the opposite row.
Deathwish: Destroy the Lowest unit on the row',
            'type' => Card::TYPE_SILVER,
            'faction' => Card::FACTION_NILFGAARD,
            'image' => 'https://media-seawolf.cursecdn.com/avatars/thumbnails/15/172/228/293/50174icon.png',
            'power' => 8,
            'defense' => 0,
            'group' => null
        ],
        [
            'title' => 'Coral',
            'spell' => 'Transform a Bronze or Silver unit into a Jade Figurine.',
            'type' => Card::TYPE_GOLD,
            'faction' => Card::FACTION_SKELLIGE,
            'image' => 'https://media-seawolf.cursecdn.com/avatars/thumbnails/15/28/228/293/5005icon.png',
            'power' => 5,
            'defense' => 0,
            'group' => Card::GROUP_MAGE
        ],
        [
            'title' => 'Nekurat',
            'spell' => 'Spawn Moonlight.',
            'type' => Card::TYPE_SILVER,
            'faction' => Card::FACTION_MONSTER,
            'image' => 'https://media-seawolf.cursecdn.com/avatars/thumbnails/15/15/228/293/4041icon.png',
            'power' => 5,
            'defense' => 0,
            'group' => Card::GROUP_VAMPIRE
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->_base as $row) {
            \App\Models\Article::create($row);
        }
    }
}
