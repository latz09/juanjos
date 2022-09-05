import chocDipped from '../public/images/cookies/choc-dipped.jpg'
import dippedPretzels from '../public/images/candy/dipped-pretzels.jpg'
import cake from '../public/images/cupcakes/cake.jpg'
import krispies from '../public/images/candy/rice-krispie.jpg'
import brownies from '../public/images/Cookies/brownies.jpg'

export const services = [
	{
		category: 'Cakes',
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
		category: 'Cookies',
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
					'Snickerdoodle',
					'White Chocolate macadamia nut',
					'Lemon Sugar Cookie',
					'Decorated Sugar Cookies',
				],
			},
		],
	},
	{
		category: 'Candy',
        image: dippedPretzels,
		blurb: 'All cookie flavors can be 1/2 dipped in white or milk chocolate',
		options: [
			{
				type: 'Candy Flavors',
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
		category: 'Rice Krispie Treats',
		blurb: 'Choose your style on a stick',
		options: [
			{
				type: 'Tradutional',
				flavors: ['Includes Sprinkles'],
			},
		],
	},
	{
		category: 'Brownies',
        image: brownies,
		blurb: '',
		options: [
			{
				type: 'options',
				options: [
					'Chocolate or frosting drizzle',
					'Crushed toppings as directed',
				],
			},
		],
	},
];
