
/*
  This file contols the configuration of the site. It should be the only code file
  you need to change to set up a different static website.

  The components depend upon a StaticConfig object being exported from this file
  with the following attributes:
    * title: The website title, as displayed in the browser title / tab bar.
    * motto: A small tagline to be displayed in the nav bar when there is room.
    * filters: The baseline Algolia search filters for this site.
    * facets: An arroy of search refinement facets provided in the Home view.
    * navs: An array of virtual "departments" for the site, each with the following attributes:
      * title: The name of the department, as displayed in the nav bar.
      * route: The Vue Router parameter value that causes this department to be displayed
          when the URL is [website]/#/nav/[route]
      * filters: Additional filters for this department, ANDed to the site's baseline filters.
      * facets: An array of search refinement facets specific to this department.

  Obviously you could add other attributes for further refinement.
    * Maybe specific meta tags could be added here for SEO purposes.
    * Maybe CSS definitions could be included here to customize each site's visual design.

  You will probably want to customize the following asset files for each
  static website:
    * favicon.ico
    * logo-small.png
    * logo.png
*/

const StaticConfig1 = {
  title: "The Complete Game Crafter",
  motto: "Everything in one place.",
  filters: "",
  facets: [
    { name: "department", label: "Departments"},
    { name: "category", label: "Category"},
    { name: "family", label: "Family"},
    { name: "object_type", label: "Type"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "max_players", label: "Max Players"},
    { name: "if_you_like", label: "If you like..."}
  ],
  navs: [
    {
      title:"Peeps",
      route:"people",
      filters:"category:Minifigs OR category:People",
      facets:[
        { name: "material", label: "Material"},
        { name: "color", label: "Color"},
        { name: "size_in_mm", label: "Size (mm)"}
      ]
    },
    {
      title:"Dice",
      route:"dice",
      filters: "category:Dice",
      facets: [
        { name: "number_of_sides", label: "# of Sides"},
        { name: "material", label: "Material"},
        { name: "color", label: "Color"},
        { name: "size_in_mm", label: "Size (mm)"}
      ]
    }
  ]
}

const StaticConfig2 = {
  title: "Little People",
  motto: "Figures and people for your games.",
  filters: "category:Minifigs OR category:People",
  facets: [
    { name: "family", label: "Family"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "size_in_mm", label: "Size (mm)"}
  ],
  navs: [
    {
      title:"Redfolk",
      route:"red",
      filters:"color:Red",
      facets:[
        { name: "material", label: "Material"},
        { name: "size_in_mm", label: "Size (mm)"}
      ]
    },
    {
      title:"Woodfolk",
      route:"wood",
      filters: "material:Wood",
      facets: [
        { name: "family", label: "Family"},
        { name: "color", label: "Color"},
        { name: "size_in_mm", label: "Size (mm)"}
      ]
    },
    {
      title:"Sale",
      route:"sale",
      filters: "on_sale:1 OR featured:1",
      facets: [
        { name: "family", label: "Family"},
        { name: "material", label: "Material"},
        { name: "color", label: "Color"},
        { name: "size_in_mm", label: "Size (mm)"}
      ]
    }
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
  filters: "category:'Indie Games'",
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
    { name: "if_you_like", label: "If You Like..."},
    { name: "featured", label: "Featured"}
  ],
  navs: []
}

export default StaticConfig1;

/*
attributesForFaceting   => ['asset_types','asset_set','license_type','digital_delivery',
'contains_nudity','contains_substance_abuse','contains_gore','contains_profanity','contains_sexuality',
'designer_id','related','components_used','id','vintage','discontinued','low_volume',
'staff_pick','featured','on_sale','price','department',
'min_age', 'min_players', 'max_players','play_time','genre','theme','setting','audience','primary_mechanic','if_you_like',
'color', 'material', 'category','family','object_type','size_in_mm','number_of_sides','usable_in_games'],
*/
