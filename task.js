const download = async (url) => {
    console.log(`Starting download from ${url}...`);
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!url) {
            reject(new Error("Download failed: URL is not provided"));
          } else {
            resolve(`File downloaded from ${url}`);
          }
        }, 2000);
      });
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  // Menggunakan async/await
  download("https://github.com/srilusiana/Pemrograman-backend.git");
  