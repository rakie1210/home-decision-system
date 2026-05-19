import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, UnitType } from "../src/generated/prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const countrySeeds = [
  { name: "Afghanistan", code: "AF" },
  { name: "Aland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote d'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Curacao", code: "CW" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and McDonald Islands", code: "HM" },
  { name: "Holy See", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People's Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People's Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "North Macedonia", code: "MK" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Barthelemy", code: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Martin (French part)", code: "MF" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Sint Maarten (Dutch part)", code: "SX" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkiye", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands (British)", code: "VG" },
  { name: "Virgin Islands (U.S.)", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
] as const;

type SeededCountry = Awaited<ReturnType<typeof prisma.country.upsert>>;

async function main() {
  const countryByCode = await seedCountries();
  const countries = {
    sweden: countryByCode.SE,
    india: countryByCode.IN,
    mexico: countryByCode.MX,
    italy: countryByCode.IT,
  };

  const users = {
    raquelle: await prisma.user.upsert({
      where: { email: "raquelle@example.com" },
      update: {
        name: "Raquelle Mae",
        password: "password123",
      },
      create: {
        name: "Raquelle Mae",
        email: "raquelle@example.com",
        password: "password123",
      },
    }),
    alex: await prisma.user.upsert({
      where: { email: "alex@example.com" },
      update: {
        name: "Alex Rivera",
        password: "password123",
      },
      create: {
        name: "Alex Rivera",
        email: "alex@example.com",
        password: "password123",
      },
    }),
  };

  const tags = {
    weeknight: await prisma.tag.upsert({
      where: { slug: "weeknight" },
      update: { name: "Weeknight" },
      create: { name: "Weeknight", slug: "weeknight" },
    }),
    vegetarian: await prisma.tag.upsert({
      where: { slug: "vegetarian" },
      update: { name: "Vegetarian" },
      create: { name: "Vegetarian", slug: "vegetarian" },
    }),
    comfortFood: await prisma.tag.upsert({
      where: { slug: "comfort-food" },
      update: { name: "Comfort Food" },
      create: { name: "Comfort Food", slug: "comfort-food" },
    }),
    highProtein: await prisma.tag.upsert({
      where: { slug: "high-protein" },
      update: { name: "High Protein" },
      create: { name: "High Protein", slug: "high-protein" },
    }),
  };

  const ingredients = {
    redLentils: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-red-lentils" },
      update: {
        name: "Red lentils",
        caloriesPer100g: 352,
        proteinPer100g: 24.6,
        fatPer100g: 1.1,
        carbohydratesPer100g: 63.4,
        nativeCountryId: countries.india.id,
      },
      create: {
        ingredientId: "ing-red-lentils",
        name: "Red lentils",
        caloriesPer100g: 352,
        proteinPer100g: 24.6,
        fatPer100g: 1.1,
        carbohydratesPer100g: 63.4,
        nativeCountryId: countries.india.id,
      },
    }),
    yellowSplitPeas: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-yellow-split-peas" },
      update: {
        name: "Yellow split peas",
        caloriesPer100g: 341,
        proteinPer100g: 25,
        fatPer100g: 1.2,
        carbohydratesPer100g: 60,
        nativeCountryId: countries.india.id,
      },
      create: {
        ingredientId: "ing-yellow-split-peas",
        name: "Yellow split peas",
        caloriesPer100g: 341,
        proteinPer100g: 25,
        fatPer100g: 1.2,
        carbohydratesPer100g: 60,
        nativeCountryId: countries.india.id,
      },
    }),
    coconutMilk: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-coconut-milk" },
      update: {
        name: "Coconut milk",
        caloriesPer100g: 197,
        proteinPer100g: 2,
        fatPer100g: 21,
        carbohydratesPer100g: 3,
        nativeCountryId: countries.india.id,
      },
      create: {
        ingredientId: "ing-coconut-milk",
        name: "Coconut milk",
        caloriesPer100g: 197,
        proteinPer100g: 2,
        fatPer100g: 21,
        carbohydratesPer100g: 3,
        nativeCountryId: countries.india.id,
      },
    }),
    oatCream: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-oat-cream" },
      update: {
        name: "Oat cream",
        caloriesPer100g: 140,
        proteinPer100g: 1,
        fatPer100g: 13,
        carbohydratesPer100g: 6,
        nativeCountryId: countries.sweden.id,
      },
      create: {
        ingredientId: "ing-oat-cream",
        name: "Oat cream",
        caloriesPer100g: 140,
        proteinPer100g: 1,
        fatPer100g: 13,
        carbohydratesPer100g: 6,
        nativeCountryId: countries.sweden.id,
      },
    }),
    tomato: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-tomato" },
      update: {
        name: "Tomato",
        caloriesPer100g: 18,
        proteinPer100g: 0.9,
        fatPer100g: 0.2,
        carbohydratesPer100g: 3.9,
        nativeCountryId: countries.mexico.id,
      },
      create: {
        ingredientId: "ing-tomato",
        name: "Tomato",
        caloriesPer100g: 18,
        proteinPer100g: 0.9,
        fatPer100g: 0.2,
        carbohydratesPer100g: 3.9,
        nativeCountryId: countries.mexico.id,
      },
    }),
    pasta: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-pasta" },
      update: {
        name: "Pasta",
        caloriesPer100g: 371,
        proteinPer100g: 13,
        fatPer100g: 1.5,
        carbohydratesPer100g: 75,
        nativeCountryId: countries.italy.id,
      },
      create: {
        ingredientId: "ing-pasta",
        name: "Pasta",
        caloriesPer100g: 371,
        proteinPer100g: 13,
        fatPer100g: 1.5,
        carbohydratesPer100g: 75,
        nativeCountryId: countries.italy.id,
      },
    }),
    rice: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-rice" },
      update: {
        name: "Rice",
        caloriesPer100g: 365,
        proteinPer100g: 7.1,
        fatPer100g: 0.7,
        carbohydratesPer100g: 80,
        nativeCountryId: countries.india.id,
      },
      create: {
        ingredientId: "ing-rice",
        name: "Rice",
        caloriesPer100g: 365,
        proteinPer100g: 7.1,
        fatPer100g: 0.7,
        carbohydratesPer100g: 80,
        nativeCountryId: countries.india.id,
      },
    }),
    potato: await prisma.ingredient.upsert({
      where: { ingredientId: "ing-potato" },
      update: {
        name: "Potato",
        caloriesPer100g: 77,
        proteinPer100g: 2,
        fatPer100g: 0.1,
        carbohydratesPer100g: 17,
        nativeCountryId: countries.sweden.id,
      },
      create: {
        ingredientId: "ing-potato",
        name: "Potato",
        caloriesPer100g: 77,
        proteinPer100g: 2,
        fatPer100g: 0.1,
        carbohydratesPer100g: 17,
        nativeCountryId: countries.sweden.id,
      },
    }),
  };

  await prisma.ingredientSubstitution.upsert({
    where: {
      fromIngredientId_toIngredientId_countryId: {
        fromIngredientId: ingredients.coconutMilk.id,
        toIngredientId: ingredients.oatCream.id,
        countryId: countries.sweden.id,
      },
    },
    update: {
      ratio: 1,
      usageNotes: "Use as a local, mild-tasting alternative in soups and curries.",
      qualityScore: 4,
    },
    create: {
      fromIngredientId: ingredients.coconutMilk.id,
      toIngredientId: ingredients.oatCream.id,
      countryId: countries.sweden.id,
      ratio: 1,
      usageNotes: "Use as a local, mild-tasting alternative in soups and curries.",
      qualityScore: 4,
    },
  });

  await prisma.ingredientSubstitution.upsert({
    where: {
      fromIngredientId_toIngredientId_countryId: {
        fromIngredientId: ingredients.rice.id,
        toIngredientId: ingredients.potato.id,
        countryId: countries.sweden.id,
      },
    },
    update: {
      ratio: 1.5,
      usageNotes: "Serve boiled potatoes beside stews when rice is not on hand.",
      qualityScore: 3,
    },
    create: {
      fromIngredientId: ingredients.rice.id,
      toIngredientId: ingredients.potato.id,
      countryId: countries.sweden.id,
      ratio: 1.5,
      usageNotes: "Serve boiled potatoes beside stews when rice is not on hand.",
      qualityScore: 3,
    },
  });

  const dal = await prisma.recipe.upsert({
    where: { recipeSlug: "red-lentil-dal" },
    update: {
      userId: users.raquelle.id,
      countryId: countries.india.id,
      title: "Red Lentil Dal",
      description: "A cozy lentil dal with tomato, coconut milk, and rice.",
      baseServings: 4,
      cookTimeMinutes: 25,
      prepTimeMinutes: 10,
      imageKey: "seed/recipes/red-lentil-dal.jpg",
      parentRecipeId: null,
    },
    create: {
      recipeSlug: "red-lentil-dal",
      userId: users.raquelle.id,
      countryId: countries.india.id,
      title: "Red Lentil Dal",
      description: "A cozy lentil dal with tomato, coconut milk, and rice.",
      baseServings: 4,
      cookTimeMinutes: 25,
      prepTimeMinutes: 10,
      imageKey: "seed/recipes/red-lentil-dal.jpg",
    },
  });

  const nordicDal = await prisma.recipe.upsert({
    where: { recipeSlug: "nordic-lentil-dal" },
    update: {
      userId: users.alex.id,
      countryId: countries.sweden.id,
      title: "Nordic Lentil Dal",
      description: "A Sweden-friendly dal variation using oat cream and potatoes.",
      baseServings: 4,
      cookTimeMinutes: 30,
      prepTimeMinutes: 10,
      imageKey: "seed/recipes/nordic-lentil-dal.jpg",
      parentRecipeId: dal.id,
    },
    create: {
      recipeSlug: "nordic-lentil-dal",
      userId: users.alex.id,
      countryId: countries.sweden.id,
      title: "Nordic Lentil Dal",
      description: "A Sweden-friendly dal variation using oat cream and potatoes.",
      baseServings: 4,
      cookTimeMinutes: 30,
      prepTimeMinutes: 10,
      imageKey: "seed/recipes/nordic-lentil-dal.jpg",
      parentRecipeId: dal.id,
    },
  });

  const tomatoPasta = await prisma.recipe.upsert({
    where: { recipeSlug: "simple-tomato-pasta" },
    update: {
      userId: users.raquelle.id,
      countryId: countries.italy.id,
      title: "Simple Tomato Pasta",
      description: "A quick pantry pasta with tomatoes and a silky sauce.",
      baseServings: 2,
      cookTimeMinutes: 15,
      prepTimeMinutes: 5,
      imageKey: "seed/recipes/simple-tomato-pasta.jpg",
      parentRecipeId: null,
    },
    create: {
      recipeSlug: "simple-tomato-pasta",
      userId: users.raquelle.id,
      countryId: countries.italy.id,
      title: "Simple Tomato Pasta",
      description: "A quick pantry pasta with tomatoes and a silky sauce.",
      baseServings: 2,
      cookTimeMinutes: 15,
      prepTimeMinutes: 5,
      imageKey: "seed/recipes/simple-tomato-pasta.jpg",
    },
  });

  await seedInstructions(dal.id, [
    "Rinse the red lentils until the water runs mostly clear.",
    "Simmer lentils, tomato, and spices until the lentils soften.",
    "Stir in coconut milk and serve with rice.",
  ]);
  await seedInstructions(nordicDal.id, [
    "Rinse the lentils and dice the potatoes.",
    "Simmer lentils, tomato, and potatoes until tender.",
    "Finish with oat cream and adjust seasoning.",
  ]);
  await seedInstructions(tomatoPasta.id, [
    "Boil pasta in salted water until al dente.",
    "Cook tomatoes into a glossy sauce.",
    "Toss pasta with sauce and a splash of pasta water.",
  ]);

  await seedRecipeTags(dal.id, [
    tags.weeknight.id,
    tags.vegetarian.id,
    tags.comfortFood.id,
    tags.highProtein.id,
  ]);
  await seedRecipeTags(nordicDal.id, [
    tags.weeknight.id,
    tags.vegetarian.id,
    tags.comfortFood.id,
  ]);
  await seedRecipeTags(tomatoPasta.id, [tags.weeknight.id, tags.vegetarian.id]);

  await seedRecipeIngredients(dal.id, [
    {
      id: "seed-ri-dal-red-lentils",
      ingredientId: ingredients.redLentils.id,
      quantity: 250,
      unit: UnitType.G,
      note: "Rinsed",
    },
    {
      id: "seed-ri-dal-coconut-milk",
      ingredientId: ingredients.coconutMilk.id,
      quantity: 400,
      unit: UnitType.ML,
      note: "Full-fat",
    },
    {
      id: "seed-ri-dal-tomato",
      ingredientId: ingredients.tomato.id,
      quantity: 2,
      unit: UnitType.PIECE,
      note: "Diced",
    },
    {
      id: "seed-ri-dal-rice",
      ingredientId: ingredients.rice.id,
      quantity: 300,
      unit: UnitType.G,
      note: "Cooked for serving",
    },
  ]);

  await seedRecipeIngredients(nordicDal.id, [
    {
      id: "seed-ri-nordic-red-lentils",
      ingredientId: ingredients.redLentils.id,
      quantity: 250,
      unit: UnitType.G,
      note: "Rinsed",
    },
    {
      id: "seed-ri-nordic-oat-cream",
      ingredientId: ingredients.oatCream.id,
      quantity: 400,
      unit: UnitType.ML,
      note: "Replaces coconut milk",
      replacesRecipeIngredientId: "seed-ri-dal-coconut-milk",
    },
    {
      id: "seed-ri-nordic-tomato",
      ingredientId: ingredients.tomato.id,
      quantity: 2,
      unit: UnitType.PIECE,
      note: "Diced",
    },
    {
      id: "seed-ri-nordic-potato",
      ingredientId: ingredients.potato.id,
      quantity: 450,
      unit: UnitType.G,
      note: "Replaces rice",
      replacesRecipeIngredientId: "seed-ri-dal-rice",
    },
  ]);

  await seedRecipeIngredients(tomatoPasta.id, [
    {
      id: "seed-ri-pasta-pasta",
      ingredientId: ingredients.pasta.id,
      quantity: 220,
      unit: UnitType.G,
      note: "Any short pasta",
    },
    {
      id: "seed-ri-pasta-tomato",
      ingredientId: ingredients.tomato.id,
      quantity: 4,
      unit: UnitType.PIECE,
      note: "Very ripe",
    },
  ]);

  await prisma.favoriteRecipe.upsert({
    where: {
      userId_recipeId: {
        userId: users.alex.id,
        recipeId: dal.id,
      },
    },
    update: {},
    create: {
      userId: users.alex.id,
      recipeId: dal.id,
    },
  });
  await prisma.favoriteRecipe.upsert({
    where: {
      userId_recipeId: {
        userId: users.raquelle.id,
        recipeId: nordicDal.id,
      },
    },
    update: {},
    create: {
      userId: users.raquelle.id,
      recipeId: nordicDal.id,
    },
  });

  console.log("Seed complete: users, countries, recipes, ingredients, and joins are ready.");
}

async function seedInstructions(recipeId: string, instructions: string[]) {
  for (const [index, instructionDescription] of instructions.entries()) {
    const stepNo = index + 1;
    await prisma.recipeInstruction.upsert({
      where: {
        recipeId_stepNo: {
          recipeId,
          stepNo,
        },
      },
      update: {
        instructionDescription,
        additionalNotes: stepNo === 1 ? "Seeded example step." : null,
        stepImageKey: `seed/instructions/${recipeId}-${stepNo}.jpg`,
      },
      create: {
        recipeId,
        stepNo,
        instructionDescription,
        additionalNotes: stepNo === 1 ? "Seeded example step." : null,
        stepImageKey: `seed/instructions/${recipeId}-${stepNo}.jpg`,
      },
    });
  }
}

async function seedRecipeTags(recipeId: string, tagIds: string[]) {
  for (const tagId of tagIds) {
    await prisma.recipeTag.upsert({
      where: {
        recipeId_tagId: {
          recipeId,
          tagId,
        },
      },
      update: {},
      create: {
        recipeId,
        tagId,
      },
    });
  }
}

type RecipeIngredientSeed = {
  id: string;
  ingredientId: string;
  quantity: number;
  unit: UnitType;
  note?: string;
  replacesRecipeIngredientId?: string;
};

async function seedRecipeIngredients(
  recipeId: string,
  recipeIngredients: RecipeIngredientSeed[],
) {
  for (const recipeIngredient of recipeIngredients) {
    await prisma.recipeIngredient.upsert({
      where: { id: recipeIngredient.id },
      update: {
        recipeId,
        ingredientId: recipeIngredient.ingredientId,
        quantity: recipeIngredient.quantity,
        unit: recipeIngredient.unit,
        note: recipeIngredient.note ?? null,
        replacesRecipeIngredientId:
          recipeIngredient.replacesRecipeIngredientId ?? null,
      },
      create: {
        id: recipeIngredient.id,
        recipeId,
        ingredientId: recipeIngredient.ingredientId,
        quantity: recipeIngredient.quantity,
        unit: recipeIngredient.unit,
        note: recipeIngredient.note,
        replacesRecipeIngredientId: recipeIngredient.replacesRecipeIngredientId,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedCountries(): Promise<Record<string, SeededCountry>> {
  const countries = await Promise.all(
    countrySeeds.map(({ name, code }) =>
      prisma.country.upsert({
        where: { code },
        update: { name },
        create: { name, code },
      }),
    ),
  );

  return Object.fromEntries(
    countries.map((country) => [country.code, country]),
  );
}
