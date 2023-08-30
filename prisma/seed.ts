import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.deleteMany({});
  await prisma.credentials.deleteMany({});
  await prisma.notes.deleteMany({});
  await prisma.cards.deleteMany({});

  const user1 = await prisma.users.create({
    data: {
      email: 'user1@example.com',
      password: 'password1',
      credentials: {
        create: [
          {
            title: 'Google',
            url: 'https://www.google.com',
            username: 'user1',
            password: 'googlepass1'
          },
          // ... add more credentials for user1 if needed
        ]
      },
      notes: {
        create: [
          {
            title: 'Meeting Notes',
            text: 'Remember to discuss project timeline.'
          },
          // ... add more notes for user1 if needed
        ]
      },
      card: {
        create: [
          {
            cardNumber: '1234567890123456',
            cardHolder: 'User One',
            cvc: '123',
            expirationMonth: 12,
            expirationYear: 2025,
            cardType: 'Credit'
          },
          // ... add more cards for user1 if needed
        ]
      }
    }
  });

  const user2 = await prisma.users.create({
    data: {
      email: 'user2@example.com',
      password: 'password2',
      // ... add credentials, notes, and cards for user2
    }
  });

  // ... add more user data as needed

  console.log('Seed data created successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
