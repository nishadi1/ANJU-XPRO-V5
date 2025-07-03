//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElUSnAyVEpnN1FmVUduVVp1OXUwT2FWSG9XK1NaL0NyY1grelZTK3hrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNINTYzRkVQc09GeFA2UE4wSlh4dUt2TmowWDNYZ1dZNHdNWG5RVWxYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSlJ6K1JnRnRLRi9LWEh4VHd1cVJzV1ZlTCtrb0hiOHhHL24xUmVTQzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdFFIUUFLOHBwa1JJTjlNOTVOMGVlcG9rdXRabXV2NEFXMGZPL2lLK1JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHL1BwSlB3LzQ2Q2FCVlpJQVBhWnQwanJ0ZEFtM2dQK0hjUzluS1hsSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpLdWswUWJiL21BL1JHQ1JmRTlwbTdwaUNNejl3SW51MUoyVXJlN3YyMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VPZGREZ2lXaW5INVFsSEp3S1pMWFpUNnNlZTVpaFZWc1R2ZmNZdGJFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRndtSkh6ajdPRlRud21nZmNJcWZPWitOclYwN3BBZ0NiYi9tZGo5S1Z4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo1MFpFSy82YkUraVZJMys2YXh3MGFNUndnTm5xcEVIdE1PYy9jS1RGUGpnNGRUdkU3U0NMYWxIdG9DUmowN01ZYk5UbHlQaktBU2tQWm9OOFhUNGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJkU29CUjh0QVYyNlZSK29GeEdYa1FKL05YcUxEWXI5Z1Y0am1FYkpkUUdrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwMTMwMzQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcwQ0Q5QjE2NzM4ODE2RjA2NzY1RTg3RDYxN0FGQzRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE1NTQwMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwMTMwMzQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyMkIxOTFBMDgyRkQ2MTg2Mzk0NDFFNkI3RDVFNDVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE1NTQwMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwMTMwMzQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCMjIxNzZEMTdFMkRBRjg5MDQ3ODJGNzhBNTNGQzUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTE1NTQwMTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5Zb0Y3ZzlJUVBLR3pFUGRqSGluYnciLCJwaG9uZUlkIjoiM2I4MzMyYjMtYjI4OS00NTM4LTk5NTEtNTU0ZWQ2MWY0OTBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVjK0Y4NVVpMSsvZThUVGdhakErdEtnTmlIaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WGoycWZPbkszcW9LRTh5QnlpTzFzRlpZL0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUgxMlFTOFkiLCJtZSI6eyJpZCI6Ijk0NzEwMTMwMzQ4OjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4MjMyNDgwNDg5Njg2OjExQGxpZCIsIm5hbWUiOiLwn5SwIOKelCBTYW5qdeOFpMOXWFBSTyDinJMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09iUzRvOEhFTW12bXNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVhczZ0UHFBMWF4VjFMK21EYTBoai9hVTE2cEpuNFdoZ1FmeCtlc0R1Rkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhHUFkrYkF6bVFjNGxROHYvNmE2R0c2WUJlViszSWJMYk1Wb1NMRE15VGRoY2hxZWI4OEZ1UWs0Q25lVWpodHhUcjQwT1M2aDNSL2R6SmJZTXUzaENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3bjBQZkdkYms0K2Rvalc3bXBRQ0hiQUo3dVM5aEE4b2lsa2dXZDlkV0tCNEorMVRrMU0xV0VIMUM0MTZSK29wdlVPTSt6MXVRek5yTjVZbUlkT1pqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEwMTMwMzQ4OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZHck9yVDZnTldzVmRTL3BnMnRJWS8ybE5lcVNaK0ZvWUVIOGZuckE3aFMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTU1NDAwOCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBK1cifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94710130348",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
