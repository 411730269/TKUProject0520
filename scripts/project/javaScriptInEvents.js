

const scriptsInEvents = {

	async DoYouSellSimCards_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async DoYouSellSimCards_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async HowMuchDoesASimCard_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowMuchDoesASimCard_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async HowMuchIsTheFare_Event2_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowMuchIsTheFare_Event2_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async Misson7_whereCanChangeMoney_Event2_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async Misson7_whereCanChangeMoney_Event2_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async WhereCanBuySimCard_Event1_Act6(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async WhereCanBuySimCard_Event1_Act7(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async DoYouSellSimCards2_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async DoYouSellSimCards2_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async DoYouSellSimCards3_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async DoYouSellSimCards3_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async AddCash2_Event2_Act14(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async AddCash2_Event2_Act15(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async HowMuchIsItInTotal2_Event6_Act3(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowMuchIsItInTotal2_Event6_Act4(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---3_Event1_Act3"](runtime, localVars)
	{
		// 在 C3 的事件中設定 WebSocket 連線
		window.socket = io("ws://127.0.0.1:5000");  // 使用 io() 初始化 WebSocket 連線
		
		window.socket.on("connect", function () {
		    console.log("✅ WebSocket 已連接！");
		});
		
		window.socket.on("error", function (error) {
		    console.error("❌ WebSocket 錯誤:", error);
		});
		
		window.socket.on("message", function (data) {
		    console.log("收到的資料:", data);  // 輸出收到的資料
		});
		
		// 設定錄音並發送音訊
		window.mediaRecorder = null;
		window.audioChunks = [];
		
		window.startRecording = function () {
		    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
		        window.mediaRecorder = new MediaRecorder(stream);
		        window.mediaRecorder.start();
		        window.audioChunks = [];
		
		        window.mediaRecorder.ondataavailable = function (event) {
		            window.audioChunks.push(event.data);
		        };
		
		        window.mediaRecorder.onstop = function () {
		            let audioBlob = new Blob(window.audioChunks, { type: "audio/wav" });
		
		            // 轉換為 ArrayBuffer 並發送
		            audioBlob.arrayBuffer().then(buffer => {
		                window.socket.send(buffer);
		            }).catch(error => console.error("❌ 錄音發送錯誤:", error));
		        };
		    }).catch(error => console.error("❌ 錄音失敗:", error));
		};
		
		window.stopRecording = function () {
		    if (window.mediaRecorder) {
		        window.mediaRecorder.stop();
		    }
		};
	},

	async ["---3_Event2_Act1"](runtime, localVars)
	{
		window.startRecording();
	},

	async ["---3_Event3_Act1"](runtime, localVars)
	{
		window.stopRecording();
	},

	async HowToCareForClassmates2_Event2_Act15(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowToCareForClassmates2_Event2_Act16(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["HowMuchIsTwoHundredAndFifty(250)2_Event2_Act3"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["HowMuchIsTwoHundredAndFifty(250)2_Event2_Act4"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async WhereIsTheBuildingWhereTheDialogueClassesAreHeld2_Event2_Act3(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async WhereIsTheBuildingWhereTheDialogueClassesAreHeld2_Event2_Act4(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["ExcuseMe,HowDoIGetToTheDormitory2_Event2_Act3"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["ExcuseMe,HowDoIGetToTheDormitory2_Event2_Act4"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---4_Event1_Act1"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["---4_Event1_Act2"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---4_Event2_Act1"](runtime, localVars)
	{

	},

	async ["---4_Event3_Act1"](runtime, localVars)
	{

	},

	async HowMuchIsItInTotal_Event2_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowMuchIsItInTotal_Event2_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---_Event1_Act3"](runtime, localVars)
	{
		// 在 C3 的事件中設定 WebSocket 連線
		window.socket = io("ws://127.0.0.1:5000");  // 使用 io() 初始化 WebSocket 連線
		
		window.socket.on("connect", function () {
		    console.log("✅ WebSocket 已連接！");
		});
		
		window.socket.on("error", function (error) {
		    console.error("❌ WebSocket 錯誤:", error);
		});
		
		window.socket.on("message", function (data) {
		    console.log("收到的資料:", data);  // 輸出收到的資料
		});
		
		// 設定錄音並發送音訊
		window.mediaRecorder = null;
		window.audioChunks = [];
		
		window.startRecording = function () {
		    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
		        window.mediaRecorder = new MediaRecorder(stream);
		        window.mediaRecorder.start();
		        window.audioChunks = [];
		
		        window.mediaRecorder.ondataavailable = function (event) {
		            window.audioChunks.push(event.data);
		        };
		
		        window.mediaRecorder.onstop = function () {
		            let audioBlob = new Blob(window.audioChunks, { type: "audio/wav" });
		
		            // 轉換為 ArrayBuffer 並發送
		            audioBlob.arrayBuffer().then(buffer => {
		                window.socket.send(buffer);
		            }).catch(error => console.error("❌ 錄音發送錯誤:", error));
		        };
		    }).catch(error => console.error("❌ 錄音失敗:", error));
		};
		
		window.stopRecording = function () {
		    if (window.mediaRecorder) {
		        window.mediaRecorder.stop();
		    }
		};
	},

	async ["---_Event2_Act1"](runtime, localVars)
	{
		window.startRecording();
	},

	async ["---_Event3_Act1"](runtime, localVars)
	{
		window.stopRecording();
	},

	async HowToCareForClassmates_Event2_Act13(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowToCareForClassmates_Event2_Act14(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async AddCash_Event2_Act18(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async AddCash_Event2_Act19(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["HowMuchIsTwoHundredAndFifty(250)_Event2_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["HowMuchIsTwoHundredAndFifty(250)_Event2_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async WhereIsTheBuildingWhereTheDialogueClassesAreHeld_Event2_Act3(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async WhereIsTheBuildingWhereTheDialogueClassesAreHeld_Event2_Act4(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["ExcuseMe,HowDoIGetToTheDormitory_Event2_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["ExcuseMe,HowDoIGetToTheDormitory_Event2_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---2_Event1_Act1"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["---2_Event1_Act2"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["---2_Event2_Act1"](runtime, localVars)
	{

	},

	async ["---2_Event3_Act1"](runtime, localVars)
	{

	},

	async CanIPayWith______Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async CanIPayWith______Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async CanITakePhotosOrVideos_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async CanITakePhotosOrVideos_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async HowMuchATicketCosts_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async HowMuchATicketCosts_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async IWant______Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async IWant______Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["SelectBus1-1_Event1_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["SelectBus1-1_Event1_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["SelectBus1-2_Event1_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["SelectBus1-2_Event1_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["SelectBus1-3_Event1_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["SelectBus1-3_Event1_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["SelectBus1-4_Event1_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["SelectBus1-4_Event1_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async IWantToEat2_Event1_Act5(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async IWantToEat2_Event1_Act6(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["I'MHungry.(Spoken)_Event2_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["I'MHungry.(Spoken)_Event2_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["IWant_(Spoken)_Event2_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["IWant_(Spoken)_Event2_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["DescribeTheAppearance,Color_Event1_Act10"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["DescribeTheAppearance,Color_Event1_Act11"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["IWantAGlassOf_____(Speaking)_Event6_Act4"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["IWantAGlassOf_____(Speaking)_Event6_Act5"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async Saying_____IsMissing_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async Saying_____IsMissing_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async ["WhereIsTheSouvenirShop)Speaking_Event1_Act14"](runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async ["WhereIsTheSouvenirShop)Speaking_Event1_Act15"](runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async WhatAreTheyDoing_Event2_Act16(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async WhatAreTheyDoing_Event2_Act17(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	},

	async Drink_sugerNIce_Event1_Act4(runtime, localVars)
	{
		let textInput = document.getElementById("myTextInput");
		
		// **1. 監聽 input，紀錄輸入方式**
		textInput.addEventListener("input", function(event) {
		    let inputMethod = event.inputType;
		    console.log("📝 input 事件：", inputMethod);
		
		    // 如果是語音輸入，標記並短暫開放輸入權限
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 語音輸入成功！");
		        textInput.dataset.voiceInput = "true"; // 標記語音輸入
		        setTimeout(() => delete textInput.dataset.voiceInput, 500); // 0.5 秒後移除標記
		    }
		});
		
		// **2. 監聽 beforeinput，暫時允許所有輸入**
		textInput.addEventListener("beforeinput", function(event) {
		    let inputMethod = event.inputType;
		    console.log("🛑 beforeinput 輸入方式：", inputMethod);
		
		    // 允許語音輸入
		    if (inputMethod === "insertFromSpeech") {
		        console.log("✅ 允許語音輸入！");
		        return; // **不阻擋語音輸入**
		    }
		
		    // 不阻止鍵盤輸入（先允許，稍後才刪除）
		});
		
		// **3. 每 500 毫秒檢查輸入，確保只有語音輸入**
		setInterval(() => {
		    if (textInput.value.length > 0 && !textInput.dataset.voiceInput) {
		        console.log("⏳ 非語音輸入已清除！");
		        textInput.value = ""; // 清除手動輸入
		    }
		}, 500);
		
	},

	async Drink_sugerNIce_Event1_Act5(runtime, localVars)
	{
// 1️⃣ 插入 CSS 來隱藏鍵盤操作和游標
let style = document.createElement("style");
style.innerHTML = `
  /* 不需要加 pointer-events: none */
#myTextInput {
  caret-color: transparent; /* 仍可以隱藏游標（美觀） */
}

`;
document.head.appendChild(style);

// 2️⃣ 點擊 Sprite「麥克風」按鈕 → 聚焦 TextInput → blur 掉，防止鍵盤出現
// （這段寫在 C3 事件中更合適，不需要用 JS 綁定按鈕點擊）

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
