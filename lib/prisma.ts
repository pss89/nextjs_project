// prisma.ts
// PrismaBetterSqlite3 어댑터를 사용하여 SQLite 데이터베이스에 연결하고 PrismaClient 인스턴스를 생성하는 코드입니다.
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../app/generated/prisma/client"; // PrismaClient를 가져옵니다.

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }; // 전역 객체에 PrismaClient 인스턴스를 저장하기 위한 타입 단언 (assertion)

const databaseUrl = process.env.DATABASE_URL || "file:./dev.db"; // 환경 변수에서 DATABASE_URL을 가져오거나 기본값으로 SQLite 데이터베이스 파일 경로를 사용합니다.
const adapter = new PrismaBetterSqlite3({url: databaseUrl}); // PrismaBetterSqlite3 어댑터를 사용하여 SQLite 데이터베이스에 연결합니다.

export const prisma = globalForPrisma.prisma ?? 
                      new PrismaClient({
                        adapter, 
                        log: ["query"]
                      }); // PrismaClient 인스턴스를 생성하고 adapter를 설정합니다.

// 개발 환경에서는 전역 객체에 PrismaClient 인스턴스를 저장하여 핫 리로딩 시에도 동일한 인스턴스를 사용하도록 합니다.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;