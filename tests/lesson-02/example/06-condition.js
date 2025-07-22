const nhietDo = 32;
if (nhietDo < 0) {
    console.log("Nhiet do am");
} else if (nhietDo >= 0 && nhietDo <= 30) {
    console.log("Nhiet do binh thuong");
} else if (nhietDo > 30 && nhietDo <= 40) {
    console.log("Nhiet do nong");
} else {
    console.log("Nhiet do rat nong");
}