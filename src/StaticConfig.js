
const StaticConfig1 = {
  title: "The Complete Game Crafter",
  motto: "Everything in one place.",
  filter: "",
  facets: [
    { name: "department", label: "Department"},
    { name: "category", label: "Category"},
    { name: "family", label: "Family"},
    { name: "object_type", label: "Type"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "max_players", label: "Max Players"}
  ]
}

const StaticConfig2 = {
  title: "Little People",
  metaDescription: "A specialized site from The Game Crafter for finding pieces to represent \
    people and other creatures in your games.",
  metaProperties: [
    // Add whatever meta properties here you like.
    {property: "og:site_name", content: "Little People"}
  ],
  motto: "Figures and people for your games.",
  filters: "category:Minifigs OR category:People",
  facets: [
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "size_in_mm", label: "Size (mm)"}
  ]
}

const StaticConfig3 = {
  title: "Just Dice",
  motto: "For however you roll.",
  filters: "category:Dice",
  facets: [
    { name: "number_of_sides", label: "# of Sides"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "size_in_mm", label: "Size (mm)"}
  ]
}

const StaticConfig4 = {
  title: "Indy Game Webstore",
  motto: "Games from people like you.",
  filters: "category:'Indie Games' AND contains_nudity:0",
  facets: [
    { name: "min_age", label: "Age"},
    { name: "play_time", label: "Play Time (minutes)"},
    { name: "min_players", label: "Min Players"},
    { name: "max_players", label: "Max Players"},
    { name: "audience", label: "Audience"},
    { name: "genre", label: "Genre"},
    { name: "theme", label: "Theme"},
    { name: "setting", label: "Setting"},
    { name: "primary_mechanic", label: "Mechanic"},
    { name: "if_you_like", label: "If You Like..."}    
  ]
}


export default StaticConfig4;

/*
attributesForFaceting   => ['asset_types','asset_set','license_type','digital_delivery',
'contains_nudity','contains_substance_abuse','contains_gore','contains_profanity','contains_sexuality',
'designer_id','related','components_used','id','vintage','discontinued','low_volume',
'staff_pick','featured','on_sale','price','department',
'min_age', 'min_players', 'max_players','play_time','genre','theme','setting','audience','primary_mechanic','if_you_like',
'color', 'material', 'category','family','object_type','size_in_mm','number_of_sides','usable_in_games'],
*/
