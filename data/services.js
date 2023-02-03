import chocDipped from '../public/images/cookies/choc-dipped.jpg';
import chocDipped2 from '../public/images/cookies/choc-dipped-2.jpg';
import dippedPretzels from '../public/images/candy/choc-covered.jpg';
import cake2 from '../public/images/cupcakes/cake2.jpg';
import cake from '../public/images/cupcakes/cake.jpg';
import cupcake1 from '../public/images/cupcakes/3cupcakes.jpg';
import cupcake2 from '../public/images/cupcakes/4cupcakes.jpg';
import krispies from '../public/images/candy/rice-krispie.jpg';
import brownies from '../public/images/cookies/brownies.jpg';

export const services = [
	{
		category: 'Specialty Cakes',
		toggleName: 'cakes',
		serviceImage: cake,
		menuImage: cake2,
		options: [
			{
				type: 'Cake Flavors',
				flavors: [
					'Vanilla',
					'Chocolate',
					'Marble',
					'Lemon',
					'Coconut Lime',
					'Pumpkin',
					'Strawberry',
					'Red Velvet',
					'FunFetti',
				],
			},

			{
				type: 'Frosting Flavors',
				flavors: [
					'Vanilla',
					'Almond',
					'Cream Cheese',
					'Chocolate',
					'Amaretto',
					'Baileys',
					'Lemon',
					'Coconut Lime',
					'Maple',
					'Salted Caramel',
					'Whiskey Salted Caramel',
				],
			},
		],
	},
	{
		category: 'Cupcakes',
		toggleName: 'cupcakes',
		serviceImage: cupcake1,
		menuImage: cupcake1,
		images: [cupcake1, cupcake2],
		options: [
			{
				type: 'Cake Flavors',
				flavors: [
					'Vanilla',
					'Chocolate',
					'Marble',
					'Lemon',
					'Coconut Lime',
					'Pumpkin',
					'Strawberry',
					'Red Velvet',
					'FunFetti',
				],
			},

			{
				type: 'Frosting Flavors',
				flavors: [
					'Vanilla',
					'Almond',
					'Cream Cheese',
					'Chocolate',
					'Amaretto',
					'Baileys',
					'Lemon',
					'Coconut Lime',
					'Maple',
					'Salted Caramel',
					'Whiskey Salted Caramel',
				],
			},
		],
	},
	{
		category: 'Cookies',
		toggleName: 'cookies',
		serviceImage: chocDipped,
		menuImage: chocDipped2,
		blurb: 'All cookie flavors can be 1/2 dipped in white or milk chocolate',
		flavors: [
			'Sugar',
			'Chocolate Chip',
			'Peanut Butter',
			'M&M',
			'Decorated Sugar Cookies',
			'White Chocolate macadamia nut',
			'Snickerdoodle',
			'Lemon Sugar Cookie',
		],
	},
	{
		category: 'Candy and Treats',
		toggleName: 'treats',
		subCategories: [
			{
				category: 'Chocolate Covered ',
				images: [dippedPretzels],
				flavors: [
					
					'Peanut Butter Cups',
					'Chocolate covered Oreos',
					'Chocolate Covered Peanuts',
					'Chocolate Covered Pretzels',
				],
			},
			{
				category: 'Rice Krispies ',
				images: [krispies],
				flavors: [
					'Traditional: Includes Sprinkles',
					'Half Dipped: In white or Milk Chocolate',
				],
			},
			{
				category: 'Brownies',
				images: [brownies],
				flavors: [
					'Chocolate or frosting drizzle',
					'Crushed toppings as directed',
				],
			},
		],
	},
];

export const menuPreview = [
	{
		category: 'Specialty Cakes',
		toggleName: 'cakes',
	},
	{
		category: 'Cupcakes',
		toggleName: 'cupcakes',
	},
	{
		category: 'Cookies',
		toggleName: 'cookies',
	},
	{
		category: 'Candy & Treats!',
		toggleName: 'candy',
	},
];
