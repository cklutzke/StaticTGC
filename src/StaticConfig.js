
let StaticConfig1 = {
  motto: "[A default config that shows all.]",
  filter: "",
  facets: [
    { name: "category", label: "Category"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "max_players", label: "Max Players"}
  ]
}

let StaticConfig2 = {
  motto: "Minifigs and People",
  filters: "category:Minifigs OR category:People",
  facets: [
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "size_in_mm", label: "Size (mm)"}
  ]
}

let StaticConfig3 = {
  motto: "Just Dice",
  filters: "category:Dice",
  facets: [
    { name: "number_of_sides", label: "# of Sides"},
    { name: "material", label: "Material"},
    { name: "color", label: "Color"},
    { name: "size_in_mm", label: "Size (mm)"}
  ]
}



export default StaticConfig2;
