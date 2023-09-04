import { faker } from "@faker-js/faker"
import { PrismaService } from "../../src/prisma/prisma.service";

export class CardsFactory {
  
    private cardNumber: string;
    private cardHolder: string;
    private cvc: string;
    private expirationMonth: number;
    private expirationYear: number;
    private cardType: string;

    constructor(cardNumber?: string, cardHolder?: string, cvc?: string, expirationMonth?: number , expirationYear?: number, cardType?: string ) {
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.cvc = cvc;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
        this.cardType = cardType;
    }
    buildFaker() {
        
        return {
            cardNumber: this.cardNumber || faker.finance.creditCardNumber(),
            cardHolder: this.cardHolder,
            cvc: this.cvc || faker.finance.creditCardCVV(),
            expirationMonth: this.expirationMonth,
            expirationYear: this.expirationYear,
            cardType: this.cardType || 'Visa',
        };
    }

    async buildDBFaker(prisma: PrismaService, user_id: number) {
        return await prisma.credentials.create({
            data: {
                cardNumber:faker.finance.creditCardNumber(),
                cardHolder: faker.finance.creditCardIssuer(),
                cvc: this.cvc || faker.finance.creditCardCVV(),
                expirationMonth: faker.date.month(),
                expirationYear: faker.date.soon(),
                cardType: this.cardType,
                userId:user_id
            },
        });
    }
}