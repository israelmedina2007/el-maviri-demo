export type Dish = {name:string;category:string;description:string;image?:string;featured?:boolean};
// PLATILLOS ILUSTRATIVOS: confirmar disponibilidad, ingredientes y precios con el restaurante.
export const dishes:Dish[]=[
{name:'Torre Maviri',category:'Especialidades',description:'Especialidad de la casa · ingredientes por confirmar.',featured:true,image:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=1100&q=85'},
{name:'Tostada Topolobampo',category:'Tostadas',description:'Preparación y acompañamientos por confirmar.',featured:true,image:'https://images.unsplash.com/photo-1547592180-85f173990554?w=1100&q=85'},
{name:'Taco Maviri',category:'Tacos',description:'Especialidad en taco · ingredientes por confirmar.',featured:true,image:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1100&q=85'},
{name:'Charola Maviri',category:'Especialidades',description:'Para compartir · contenido por confirmar.',featured:true,image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1100&q=85'},
{name:'Taco Gobernador',category:'Tacos',description:'Preparación y precio por confirmar.',image:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1100&q=85'},
{name:'Tostada de sashimi',category:'Tostadas',description:'Preparación y precio por confirmar.',image:'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1100&q=85'},
{name:'Aguachile',category:'Ceviches y aguachiles',description:'Variedades disponibles por confirmar.',image:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=1100&q=85'},
{name:'Coctel de mariscos',category:'Cocteles',description:'Presentaciones disponibles por confirmar.',image:'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1100&q=85'},
{name:'Caldo de mariscos',category:'Caldos',description:'Variedades disponibles por confirmar.',image:'https://images.unsplash.com/photo-1547592180-85f173990554?w=1100&q=85'}
];
export const categories=['Todos','Especialidades','Tacos','Tostadas','Ceviches y aguachiles','Cocteles','Caldos'];
