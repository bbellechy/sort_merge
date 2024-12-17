module.exports = {
    preset: 'ts-jest',  // ใช้ ts-jest สำหรับการแปลง TypeScript
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': 'ts-jest',  // ใช้ ts-jest แปลงไฟล์ .ts
    },
    moduleFileExtensions: ['js', 'ts'],  // รองรับการนำเข้าไฟล์ .js และ .ts
  };
  