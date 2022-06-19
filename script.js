function handleInputChange(event){
    let existingTable = document.getElementsByTagName("table");
    /* debugger
    //if(existingTable.length > 0){
        removeExistingTable(existingTable);
        return
    }    */
    let files = event.target.files;
    document.getElementById("file-numbers").innerText = files.length + " Files";
    var reminder = document.getElementById("reminder");
    reminder.innerText = " ";
    //creates a table (<table>) element and a table body (<tbody>) element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    //creates a table row
    const row = document.createElement("tr");
    const th1 = document.createElement("th");
    const th1Text = document.createTextNode("File Name");
    const th2 = document.createElement("th");
    const th2Text = document.createTextNode("File Size");
    th1.appendChild(th1Text);
    th2.appendChild(th2Text);
    row.appendChild(th1);
    row.appendChild(th2);
    //add the row to the end of the table body
    tblBody.appendChild(row);
    //put the tbody in the table
    tbl.appendChild(tblBody);
    //appends table into body
    document.body.appendChild(tbl);
    for (var i = 0; i < files.length; i++) {
        var rows = tblBody.insertRow(i);
        let fileSize = getFileSize(files[i].size)
        const th1 = document.createElement("td");
        const th1Text = document.createTextNode(files[i].webkitRelativePath);
        const th2 = document.createElement("td");
        const th2Text = document.createTextNode(fileSize);
        th1.appendChild(th1Text);
        th2.appendChild(th2Text);
        rows.appendChild(th1);
        rows.appendChild(th2);
        tblBody.appendChild(rows);
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
    }
}
//function for file sizes
function getFileSize(bytes){
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}
//function for table hide or remove
function removeExistingTable(existingTable){
    let tbody = document.getElementsByTagName("tbody");
    existingTable.removeChild(tbody);
}