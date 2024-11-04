import { MongoClient } from 'mongodb';
import { videos, notifications, photosWinter, photosSpring, components, Cards, AllCollection, Ads, Brands } from "@/lib/db";
const url = process.env.MONGO_URI || '';
const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        // Connect to the MongoDB client
        await client.connect();

        const database = client.db('E-Commerce');

        // Get collection references
        const videosCollection = database.collection('videos');
        const notificationsCollection = database.collection('notifications');
        const photosWinterCollection = database.collection('photosWinter');
        const photosSpringCollection = database.collection('photosSpring');
        const componentsCollection = database.collection('components');
        const cardsCollection = database.collection('Cards');
        const allCollection = database.collection('AllCollection');
        const adsCollection = database.collection('Ads');
        const brandsCollection = database.collection('Brands');

        // Insert data into collections
        const videosResult = await videosCollection.insertMany(videos);
        console.log(`Inserted ${videosResult.insertedCount} videos into the database`);

        const notificationsResult = await notificationsCollection.insertMany(notifications);
        console.log(`Inserted ${notificationsResult.insertedCount} notifications into the database`);

        const photosWinterResult = await photosWinterCollection.insertMany(photosWinter);
        console.log(`Inserted ${photosWinterResult.insertedCount} photosWinter into the database`);

        const photosSpringResult = await photosSpringCollection.insertMany(photosSpring);
        console.log(`Inserted ${photosSpringResult.insertedCount} photosSpring into the database`);

        const componentsResult = await componentsCollection.insertMany(components);
        console.log(`Inserted ${componentsResult.insertedCount} components into the database`);

        const cardsResult = await cardsCollection.insertMany(Cards);
        console.log(`Inserted ${cardsResult.insertedCount} cards into the database`);

        const allCollectionResult = await allCollection.insertMany(AllCollection);
        console.log(`Inserted ${allCollectionResult.insertedCount} allCollection into the database`);

        const adsResult = await adsCollection.insertMany(Ads);
        console.log(`Inserted ${adsResult.insertedCount} ads into the database`);

        const brandsResult = await brandsCollection.insertMany(Brands);
        console.log(`Inserted ${brandsResult.insertedCount} brands into the database`);
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        // Ensure the client connection is closed
        await client.close();
    }
}

// Export the function to use elsewhere
export default connectToDatabase;
