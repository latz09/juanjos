import chocDipped from '../public/images/cookies/choc-dipped.jpg'
import dippedPretzels from '../public/images/candy/choc-covered.jpg'
import cake from '../public/images/cupcakes/cake.jpg'
import cupcake from '../public/images/cupcakes/3cupcakes.jpg'
import krispies from '../public/images/candy/rice-krispie.jpg'
import brownies from '../public/images/cookies/brownies.jpg'

export const services = [
	{
		category: 'Specialty Cakes',
		toggleName: 'cakes',
        image: cake,
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
        image: cupcake,
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
        image: chocDipped,
		blurb: 'All cookie flavors can be 1/2 dipped in white or milk chocolate',
		options: [
			{
				type: 'Cookie Flavors',
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
		],
	},
	{
		category: 'Candy',
		toggleName: 'candy',
        image: dippedPretzels,
		blurb: 'All cookie flavors can be 1/2 dipped in white or milk chocolate',
		options: [
			{
				type: 'Candy Options',
				flavors: [
					'Peanut Butter Cups',
					'Chocolate Covered Peanuts',
					'Chocolate covered Oreos',
					'Chocolate Covered Pretzels',
				],
			},
		],
	},
	{
        image: krispies,
		toggleName: 'rice-krispies',
		category: 'Rice Krispie Treats',
		blurb: 'Choose your style on a stick',
		options: [
			{
				type: 'Traditional',
				flavors: ['Includes Sprinkles'],
			},
			{
				type: 'Half Dipped',
				flavors: ['In white or Milk Chocolate'],
			},
		],
	},
	{
		category: 'Brownies',
		toggleName: 'brownies',
        image: brownies,
		blurb: 'something about brownies',
		options: [
			{
				type: 'options',
				flavors: [
					'Chocolate or frosting drizzle',
					'Crushed toppings as directed',
				],
			},
		],
	},
];
