export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: number;
  price: number;
  offerPrice?: number;
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
  description?: string;
}

export interface P1Product {
  id: number;
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Sparkles",
    slug: "sparkles",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Fancy Sparkles",
    slug: "fancy-sparkles",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Colour Matches & Guns",
    slug: "colour-matches-guns",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Special Multi Colour Shots",
    slug: "special-multi-colour-shots",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  }
];

export const p1: Record<string, P1Product[]> = {
  "Combo Package": [
    {
      id: 1,
      name: "2500 Combo",
      price: 2500,
      offerPrice: 2500,
      image: "https://k2gcrackers.com/images/combos/2500_combo.jpg"
    },
    {
      id: 2,
      name: "5000 Combo",
      price: 5000,
      offerPrice: 5000,
      image: "https://k2gcrackers.com/images/combos/5000_combo.jpg"
    },
    {
      id: 3,
      name: "7000 Combo",
      price: 7000,
      offerPrice: 7000,
      image: "https://k2gcrackers.com/images/combos/7000_combo.jpg"
    },
    {
      id: 4,
      name: "10k mega combo pack",
      price: 10000,
      offerPrice: 10000,
      image: "https://k2gcrackers.com/images/combos/10k_mega_combo.jpg"
    }
  ],
  "Ground Chakkar": [
    {
      id: 5,
      name: "Ground chakkar big",
      price: 31,
      offerPrice: 155,
      image: "https://k2gcrackers.com/images/ground_chakkar/big.jpg"
    },
    {
      id: 6,
      name: "Ground chakkar ashoka",
      price: 46,
      offerPrice: 230,
      image: "https://k2gcrackers.com/images/ground_chakkar/ashoka.jpg"
    },
    {
      id: 7,
      name: "Ground chakkar SPL",
      price: 56,
      offerPrice: 280,
      image: "https://k2gcrackers.com/images/ground_chakkar/spl.jpg"
    },
    {
      id: 8,
      name: "Ground chakkar deluxe",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/ground_chakkar/deluxe.jpg"
    },
    {
      id: 9,
      name: "Moto wheel",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/ground_chakkar/moto_wheel.jpg"
    },
    {
      id: 10,
      name: "whistling wheel",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/ground_chakkar/whistling.jpg"
    }
  ],
  "New Arrivals": [
    {
      id: 11,
      name: "Lucky money",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/new_arrivals/lucky_money.jpg"
    },
    {
      id: 12,
      name: "Bat and ball",
      price: 200,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/new_arrivals/bat_ball.jpg"
    },
    {
      id: 13,
      name: "Android 4 in 1",
      price: 200,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/new_arrivals/android_4in1.jpg"
    },
    {
      id: 14,
      name: "Old is gold (olai vedi)",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/new_arrivals/old_is_gold.jpg"
    },
    {
      id: 15,
      name: "Volcano",
      price: 220,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/new_arrivals/volcano.jpg"
    },
    {
      id: 16,
      name: "Ak47",
      price: 200,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/new_arrivals/ak47.jpg"
    },
    {
      id: 17,
      name: "Wire chakkar",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/new_arrivals/wire_chakkar.jpg"
    },
    {
      id: 18,
      name: "Golden duck(three steps function)",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/new_arrivals/golden_duck.jpg"
    },
    {
      id: 19,
      name: "Ludo king",
      price: 330,
      offerPrice: 1650,
      image: "https://k2gcrackers.com/images/new_arrivals/ludo_king.jpg"
    },
    {
      id: 20,
      name: "Milky bar",
      price: 340,
      offerPrice: 1700,
      image: "https://k2gcrackers.com/images/new_arrivals/milky_bar.jpg"
    },
    {
      id: 21,
      name: "90 watt",
      price: 120,
      offerPrice: 600,
      image: "https://k2gcrackers.com/images/new_arrivals/90_watt.jpg"
    },
    {
      id: 22,
      name: "5' tin water queen",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/new_arrivals/tin_water_queen.jpg"
    }
  ],
  "New Arrivals 2024": [
    {
      id: 23,
      name: "I cone",
      price: 250,
      offerPrice: 1250,
      image: "https://k2gcrackers.com/images/new_arrivals_2024/i_cone.jpg"
    },
    {
      id: 24,
      name: "Racing car",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/new_arrivals_2024/racing_car.jpg"
    },
    {
      id: 25,
      name: "Kinderjoy",
      price: 250,
      offerPrice: 1250,
      image: "https://k2gcrackers.com/images/new_arrivals_2024/kinderjoy.jpg"
    },
    {
      id: 26,
      name: "Fire egg",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/new_arrivals_2024/fire_egg.jpg"
    }
  ],
  "Sparklers": [
    {
      id: 27,
      name: "10cm Colour",
      price: 15,
      offerPrice: 75,
      image: "https://k2gcrackers.com/images/sparklers/10cm_colour.jpg"
    },
    {
      id: 28,
      name: "15cm Green",
      price: 40,
      offerPrice: 200,
      image: "https://k2gcrackers.com/images/sparklers/15cm_green.jpg"
    },
    {
      id: 29,
      name: "15cm Red",
      price: 40,
      offerPrice: 200,
      image: "https://k2gcrackers.com/images/sparklers/15cm_red.jpg"
    },
    {
      id: 30,
      name: "30cm Red",
      price: 40,
      offerPrice: 200,
      image: "https://k2gcrackers.com/images/sparklers/30cm_red.jpg"
    },
    {
      id: 31,
      name: "30cm Green",
      price: 40,
      offerPrice: 200,
      image: "https://k2gcrackers.com/images/sparklers/30cm_green.jpg"
    },
    {
      id: 32,
      name: "10cm 4 in 1",
      price: 20,
      offerPrice: 100,
      image: "https://k2gcrackers.com/images/sparklers/10cm_4in1.jpg"
    },
    {
      id: 33,
      name: "10cm Electric",
      price: 12,
      offerPrice: 60,
      image: "https://k2gcrackers.com/images/sparklers/10cm_electric.jpg"
    },
    {
      id: 34,
      name: "15cm Electric",
      price: 28,
      offerPrice: 140,
      image: "https://k2gcrackers.com/images/sparklers/15cm_electric.jpg"
    },
    {
      id: 35,
      name: "15cm Colour",
      price: 31,
      offerPrice: 155,
      image: "https://k2gcrackers.com/images/sparklers/15cm_colour.jpg"
    },
    {
      id: 36,
      name: "30cm Electric",
      price: 28,
      offerPrice: 140,
      image: "https://k2gcrackers.com/images/sparklers/30cm_electric.jpg"
    },
    {
      id: 37,
      name: "30cm Colour",
      price: 31,
      offerPrice: 155,
      image: "https://k2gcrackers.com/images/sparklers/30cm_colour.jpg"
    },
    {
      id: 38,
      name: "50cm Colour",
      price: 148,
      offerPrice: 740,
      image: "https://k2gcrackers.com/images/sparklers/50cm_colour.jpg"
    },
    {
      id: 39,
      name: "50cm multi mix",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/sparklers/50cm_multi_mix.jpg"
    },
    {
      id: 40,
      name: "50cm electric sparklers",
      price: 130,
      offerPrice: 650,
      image: "https://k2gcrackers.com/images/sparklers/50cm_electric.jpg"
    }
  ],
  "Special Multi Color Shot": [
    {
      id: 41,
      name: "3\" Sedout",
      price: 5500,
      offerPrice: 27000,
      image: "https://k2gcrackers.com/images/multi_color_shots/3_sedout.jpg"
    },
    {
      id: 42,
      name: "10 *10 Multi color Shots",
      price: 2800,
      offerPrice: 14000,
      image: "https://k2gcrackers.com/images/multi_color_shots/10x10_multi.jpg"
    },
    {
      id: 43,
      name: "2\" Sedout",
      price: 3500,
      offerPrice: 17500,
      image: "https://k2gcrackers.com/images/multi_color_shots/2_sedout.jpg"
    },
    {
      id: 44,
      name: "Peacock dance 30 Shot (IPL Function)",
      price: 400,
      offerPrice: 2000,
      image: "https://k2gcrackers.com/images/multi_color_shots/peacock_dance.jpg"
    },
    {
      id: 45,
      name: "25 Whistling Shot",
      price: 580,
      offerPrice: 2900,
      image: "https://k2gcrackers.com/images/multi_color_shots/25_whistling.jpg"
    }
  ],
  "Loose Crackers": [
    {
      id: 46,
      name: "Stripped bijli",
      price: 36,
      offerPrice: 180,
      image: "https://k2gcrackers.com/images/loose_crackers/stripped_bijli.jpg"
    },
    {
      id: 47,
      name: "Red bijli",
      price: 32,
      offerPrice: 160,
      image: "https://k2gcrackers.com/images/loose_crackers/red_bijli.jpg"
    },
    {
      id: 48,
      name: "Penta force",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/loose_crackers/penta_force.jpg"
    },
    {
      id: 49,
      name: "Multi color crackers shot",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/loose_crackers/multi_color_shot.jpg"
    },
    {
      id: 50,
      name: "2* Fancy",
      price: 110,
      offerPrice: 550,
      image: "https://k2gcrackers.com/images/loose_crackers/2_fancy.jpg"
    },
    {
      id: 51,
      name: "Chotta Fancy special",
      price: 45,
      offerPrice: 225,
      image: "https://k2gcrackers.com/images/loose_crackers/chotta_fancy_special.jpg"
    },
    {
      id: 52,
      name: "Sky wings",
      price: 140,
      offerPrice: 700,
      image: "https://k2gcrackers.com/images/loose_crackers/sky_wings.jpg"
    },
    {
      id: 53,
      name: "3* Fancy",
      price: 220,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/loose_crackers/3_fancy.jpg"
    },
    {
      id: 54,
      name: "3\" ½ Fancy",
      price: 260,
      offerPrice: 1300,
      image: "https://k2gcrackers.com/images/loose_crackers/3_half_fancy.jpg"
    },
    {
      id: 55,
      name: "Fancy (3 pcs)",
      price: 280,
      offerPrice: 1400,
      image: "https://k2gcrackers.com/images/loose_crackers/fancy_3pcs.jpg"
    },
    {
      id: 56,
      name: "Chotta fancy",
      price: 25,
      offerPrice: 130,
      image: "https://k2gcrackers.com/images/loose_crackers/chotta_fancy.jpg"
    }
  ],
  "Fancy Sparkles": [
    {
      id: 57,
      name: "15cm pink",
      price: 50,
      offerPrice: 250,
      image: "https://k2gcrackers.com/images/fancy_sparklers/15cm_pink.jpg"
    },
    {
      id: 58,
      name: "15cm silver drop",
      price: 46,
      offerPrice: 230,
      image: "https://k2gcrackers.com/images/fancy_sparklers/silver_drop.jpg"
    },
    {
      id: 59,
      name: "Lovely heart",
      price: 125,
      offerPrice: 625,
      image: "https://k2gcrackers.com/images/fancy_sparklers/lovely_heart.jpg"
    },
    {
      id: 60,
      name: "15 CM violet",
      price: 50,
      offerPrice: 250,
      image: "https://k2gcrackers.com/images/fancy_sparklers/15cm_violet.jpg"
    },
    {
      id: 61,
      name: "15 CM blue",
      price: 50,
      offerPrice: 250,
      image: "https://k2gcrackers.com/images/fancy_sparklers/15cm_blue.jpg"
    }
  ],
  "Flower Pots": [
    {
      id: 62,
      name: "Flower boy big",
      price: 50,
      offerPrice: 250,
      image: "https://k2gcrackers.com/images/flower_pots/flower_boy_big.jpg"
    },
    {
      id: 63,
      name: "Flower bot Ashoka",
      price: 70,
      offerPrice: 350,
      image: "https://k2gcrackers.com/images/flower_pots/flower_bot_ashoka.jpg"
    },
    {
      id: 64,
      name: "Color koti deluxe",
      price: 240,
      offerPrice: 1200,
      image: "https://k2gcrackers.com/images/flower_pots/color_koti_deluxe.jpg"
    },
    {
      id: 65,
      name: "Color koti",
      price: 140,
      offerPrice: 700,
      image: "https://k2gcrackers.com/images/flower_pots/color_koti.jpg"
    },
    {
      id: 66,
      name: "Tri color",
      price: 220,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/flower_pots/tri_color.jpg"
    },
    {
      id: 67,
      name: "Flower Pots Special",
      price: 60,
      offerPrice: 300,
      image: "https://k2gcrackers.com/images/flower_pots/flower_pots_special.jpg"
    },
    {
      id: 68,
      name: "mega jumbo pots",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/flower_pots/mega_jumbo.jpg"
    }
  ],
  "Multicolour Shots": [
    {
      id: 69,
      name: "240 Shots Multicolour prime",
      price: 3400,
      offerPrice: 17000,
      image: "https://k2gcrackers.com/images/multicolour_shots/240_shots_prime.jpg"
    },
    {
      id: 70,
      name: "12 Shot Crackling",
      price: 90,
      offerPrice: 450,
      image: "https://k2gcrackers.com/images/multicolour_shots/12_shot_crackling.jpg"
    },
    {
      id: 71,
      name: "120 Shots Multicolour",
      price: 1680,
      offerPrice: 8400,
      image: "https://k2gcrackers.com/images/multicolour_shots/120_shots.jpg"
    },
    {
      id: 72,
      name: "7 shot [5 pcs]",
      price: 69,
      offerPrice: 350,
      image: "https://k2gcrackers.com/images/multicolour_shots/7_shot_5pcs.jpg"
    },
    {
      id: 73,
      name: "12 shot",
      price: 90,
      offerPrice: 450,
      image: "https://k2gcrackers.com/images/multicolour_shots/12_shot.jpg"
    },
    {
      id: 74,
      name: "60Shot Multi color with prime",
      price: 840,
      offerPrice: 4200,
      image: "https://k2gcrackers.com/images/multicolour_shots/60_shot_prime.jpg"
    },
    {
      id: 75,
      name: "30 Shots Multicolour",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/multicolour_shots/30_shots.jpg"
    },
    {
      id: 76,
      name: "60 Shots Multicolour",
      price: 700,
      offerPrice: 3500,
      image: "https://k2gcrackers.com/images/multicolour_shots/60_shots.jpg"
    },
    {
      id: 77,
      name: "25 Shot Rider",
      price: 235,
      offerPrice: 1150,
      image: "https://k2gcrackers.com/images/multicolour_shots/25_shot_rider.jpg"
    },
    {
      id: 78,
      name: "25 Shots Crackling",
      price: 250,
      offerPrice: 2500,
      image: "https://k2gcrackers.com/images/multicolour_shots/25_shots_crackling.jpg"
    },
    {
      id: 79,
      name: "15 Shot multi- color",
      price: 200,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/multicolour_shots/15_shot_multi.jpg"
    },
    {
      id: 80,
      name: "30 Shot multi color prime",
      price: 420,
      offerPrice: 2100,
      image: "https://k2gcrackers.com/images/multicolour_shots/30_shot_prime.jpg"
    },
    {
      id: 81,
      name: "12 Shot rider color crackling",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/multicolour_shots/12_shot_rider.jpg"
    },
    {
      id: 82,
      name: "510 Shots Multicolour",
      price: 7400,
      offerPrice: 37000,
      image: "https://k2gcrackers.com/images/multicolour_shots/510_shots.jpg"
    },
    {
      id: 83,
      name: "60 Shot multi color prime",
      price: 840,
      offerPrice: 4200,
      image: "https://k2gcrackers.com/images/multicolour_shots/60_shot_multi_prime.jpg"
    },
    {
      id: 84,
      name: "digital star 3 1/2 fancy",
      price: 220,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/multicolour_shots/digital_star.jpg"
    },
    {
      id: 85,
      name: "2 3/4 fancy [3 pcs] spl",
      price: 359,
      offerPrice: 1800,
      image: "https://k2gcrackers.com/images/multicolour_shots/2_3_4_fancy.jpg"
    },
    {
      id: 86,
      name: "king fisher spl 3 1/2 fancy",
      price: 219,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/multicolour_shots/king_fisher.jpg"
    },
    {
      id: 87,
      name: "ster world [5pce]",
      price: 179,
      offerPrice: 900,
      image: "https://k2gcrackers.com/images/multicolour_shots/ster_world.jpg"
    }
  ],
  "One Sound Crackers": [
    {
      id: 88,
      name: "3 1/2 ' Lakshmi",
      price: 12,
      offerPrice: 60,
      image: "https://k2gcrackers.com/images/one_sound/3_half_lakshmi.jpg"
    },
    {
      id: 89,
      name: "4 \" Deluxe halk",
      price: 30,
      offerPrice: 150,
      image: "https://k2gcrackers.com/images/one_sound/4_deluxe_halk.jpg"
    },
    {
      id: 90,
      name: "4 ' Lakshmi",
      price: 16,
      offerPrice: 80,
      image: "https://k2gcrackers.com/images/one_sound/4_lakshmi.jpg"
    },
    {
      id: 91,
      name: "4 \" Deluxe lakshmi",
      price: 24,
      offerPrice: 220,
      image: "https://k2gcrackers.com/images/one_sound/4_deluxe_lakshmi.jpg"
    },
    {
      id: 92,
      name: "6 ' Dragan",
      price: 45,
      offerPrice: 450,
      image: "https://k2gcrackers.com/images/one_sound/6_dragan.jpg"
    },
    {
      id: 93,
      name: "5 \" joker",
      price: 35,
      offerPrice: 350,
      image: "https://k2gcrackers.com/images/one_sound/5_joker.jpg"
    },
    {
      id: 94,
      name: "2 3/4 ' Kuruvi",
      price: 7,
      offerPrice: 60,
      image: "https://k2gcrackers.com/images/one_sound/2_3_4_kuruvi.jpg"
    },
    {
      id: 95,
      name: "gold lakshmi",
      price: 21,
      offerPrice: 105,
      image: "https://k2gcrackers.com/images/one_sound/gold_lakshmi.jpg"
    }
  ],
  "Bomb": [
    {
      id: 96,
      name: "Bullet Bomb",
      price: 30,
      offerPrice: 300,
      image: "https://k2gcrackers.com/images/bomb/bullet_bomb.jpg"
    },
    {
      id: 97,
      name: "Hydro Bomb",
      price: 60,
      offerPrice: 600,
      image: "https://k2gcrackers.com/images/bomb/hydro_bomb.jpg"
    },
    {
      id: 98,
      name: "King Of king Bomb",
      price: 100,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/bomb/king_of_king.jpg"
    },
    {
      id: 99,
      name: "Classic Bomb",
      price: 110,
      offerPrice: 1100,
      image: "https://k2gcrackers.com/images/bomb/classic_bomb.jpg"
    },
    {
      id: 100,
      name: "Digital Bomb",
      price: 199,
      offerPrice: 1000,
      image: "https://k2gcrackers.com/images/bomb/digital_bomb.jpg"
    }
  ],
  "Special Novelties": [
    {
      id: 101,
      name: "Drone",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/special_novelties/drone.jpg"
    },
    {
      id: 102,
      name: "Butterfly",
      price: 80,
      offerPrice: 400,
      image: "https://k2gcrackers.com/images/special_novelties/butterfly.jpg"
    },
    {
      id: 103,
      name: "Disco Shower",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/special_novelties/disco_shower.jpg"
    },
    {
      id: 104,
      name: "Bambaram",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/special_novelties/bambaram.jpg"
    },
    {
      id: 105,
      name: "mini siren [5 pce]",
      price: 100,
      offerPrice: 500,
      image: "https://k2gcrackers.com/images/special_novelties/mini_siren.jpg"
    },
    {
      id: 106,
      name: "Mega Siren",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/special_novelties/mega_siren.jpg"
    },
    {
      id: 107,
      name: "LA-LA goodly",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/special_novelties/la_la_goodly.jpg"
    }
  ],
  "Peacock Novelties": [
    {
      id: 108,
      name: "Peacock 3 phase",
      price: 150,
      offerPrice: 750,
      image: "https://k2gcrackers.com/images/peacock_novelties/peacock_3_phase.jpg"
    },
    {
      id: 109,
      name: "Bada Peacock",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/peacock_novelties/bada_peacock.jpg"
    }
  ],
  "Special Night Attraction": [
    {
      id: 110,
      name: "Triable ball",
      price: 450,
      offerPrice: 2150,
      image: "https://k2gcrackers.com/images/special_night/triable_ball.jpg"
    },
    {
      id: 111,
      name: "4\" Fancy ( Tin)",
      price: 330,
      offerPrice: 1650,
      image: "https://k2gcrackers.com/images/special_night/4_fancy_tin.jpg"
    },
    {
      id: 112,
      name: "7 Step",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/special_night/7_step.jpg"
    },
    {
      id: 113,
      name: "4\" Red Fish",
      price: 320,
      offerPrice: 1600,
      image: "https://k2gcrackers.com/images/special_night/4_red_fish.jpg"
    },
    {
      id: 114,
      name: "Double bal",
      price: 400,
      offerPrice: 2000,
      image: "https://k2gcrackers.com/images/special_night/double_bal.jpg"
    },
    {
      id: 115,
      name: "4\" Blue out",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/special_night/4_blue_out.jpg"
    },
    {
      id: 116,
      name: "4' FANCY NAYAGAR FALLS",
      price: 280,
      offerPrice: 1400,
      image: "https://k2gcrackers.com/images/special_night/fancy_nayagar_falls.jpg"
    },
    {
      id: 117,
      name: "5\" Fany ( 2Pcs)",
      price: 800,
      offerPrice: 4000,
      image: "https://k2gcrackers.com/images/special_night/5_fancy_2pcs.jpg"
    },
    {
      id: 118,
      name: "4\" Pink out",
      price: 350,
      offerPrice: 1750,
      image: "https://k2gcrackers.com/images/special_night/4_pink_out.jpg"
    },
    {
      id: 119,
      name: "12 Step",
      price: 400,
      offerPrice: 2000,
      image: "https://k2gcrackers.com/images/special_night/12_step.jpg"
    },
    {
      id: 120,
      name: "white gun [5 pcs]",
      price: 161,
      offerPrice: 810,
      image: "https://k2gcrackers.com/images/special_night/white_gun_5pcs.jpg"
    }
  ],
  "Paper Bomb": [
    {
      id: 121,
      name: "1 Kg Paper Bomb",
      price: 170,
      offerPrice: 850,
      image: "https://k2gcrackers.com/images/paper_bomb/1kg_paper_bomb.jpg"
    },
    {
      id: 122,
      name: "500 Gm Paper Bomb",
      price: 96,
      offerPrice: 480,
      image: "https://k2gcrackers.com/images/paper_bomb/500gm_paper_bomb.jpg"
    },
    {
      id: 123,
      name: "250 Gm Paper Bomb",
      price: 48,
      offerPrice: 240,
      image: "https://k2gcrackers.com/images/paper_bomb/250gm_paper_bomb.jpg"
    }
  ],
  "Twinkle Star": [
    {
      id: 124,
      name: "1 1/2 Twinkling Star",
      price: 20,
      offerPrice: 100,
      image: "https://k2gcrackers.com/images/twinkle_star/1_half_twinkling.jpg"
    },
    {
      id: 125,
      name: "4 ' Twinkling Star",
      price: 40,
      offerPrice: 200,
      image: "https://k2gcrackers.com/images/twinkle_star/4_twinkling.jpg"
    }
  ],
  "Digital Lar": [
    {
      id: 126,
      name: "1k Sliver",
      price: 160,
      offerPrice: 800,
      image: "https://k2gcrackers.com/images/digital_lar/1k_sliver.jpg"
    },
    {
      id: 127,
      name: "1k Prime",
      price: 310,
      offerPrice: 1550,
      image: "https://k2gcrackers.com/images/digital_lar/1k_prime.jpg"
    },
    {
      id: 128,
      name: "2k Prime",
      price: 620,
      offerPrice: 3100,
      image: "https://k2gcrackers.com/images/digital_lar/2k_prime.jpg"
    },
    {
      id: 129,
      name: "5k Prime",
      price: 1500,
      offerPrice: 7500,
      image: "https://k2gcrackers.com/images/digital_lar/5k_prime.jpg"
    },
    {
      id: 130,
      name: "2k half",
      price: 320,
      offerPrice: 1600,
      image: "https://k2gcrackers.com/images/digital_lar/2k_half.jpg"
    },
    {
      id: 131,
      name: "5k half",
      price: 800,
      offerPrice: 4000,
      image: "https://k2gcrackers.com/images/digital_lar/5k_half.jpg"
    }
  ],
  "Fountain": [
    {
      id: 132,
      name: "wonders 3in1",
      price: 240,
      offerPrice: 1200,
      image: "https://k2gcrackers.com/images/fountain/wonders_3in1.jpg"
    },
    {
      id: 133,
      name: "pogo [5pcs]",
      price: 36,
      offerPrice: 180,
      image: "https://k2gcrackers.com/images/fountain/pogo_5pcs.jpg"
    },
    {
      id: 134,
      name: "green ster [3pce]",
      price: 132,
      offerPrice: 660,
      image: "https://k2gcrackers.com/images/fountain/green_ster_3pce.jpg"
    }
  ]
};

export const banners = [
  {
    id: 1,
    title: "Diwali Special Collection",
    subtitle: "Illuminate your festivals with premium Sivakasi fireworks",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=500&fit=crop",
    link: "/products"
  },
  {
    id: 2,
    title: "Wedding Celebrations",
    subtitle: "Make your special day magical with our fancy crackers",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=500&fit=crop",
    link: "/products/fancy-sparkles"
  },
  {
    id: 3,
    title: "Bulk Orders Available",
    subtitle: "Special discounts on wholesale purchases for dealers",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=500&fit=crop",
    link: "/contact"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Festival Organizer",
    content: "K2G Crackers has been our go-to supplier for 5 years. Their quality is unmatched and delivery is always on time for our Diwali celebrations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Event Planner",
    content: "The variety and quality of their fancy crackers made our wedding celebration truly magical. Highly recommend K2G Crackers!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "Wholesale Dealer",
    content: "Excellent service and genuine Sivakasi products. Their bulk pricing and timely delivery helps us serve our customers better.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];
