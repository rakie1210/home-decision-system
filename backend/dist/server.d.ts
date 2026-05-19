import "dotenv/config";
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export declare function saveImageKeyToPrisma(): Promise<void>;
//# sourceMappingURL=server.d.ts.map