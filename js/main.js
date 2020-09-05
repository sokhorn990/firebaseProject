db.collection('person').get().then(data => {
    var list = document.querySelector('table');
    var result = "";
    data.forEach(element => {
        result +=`
        <tr>
            <td>${element.data().name}</td>
            <td>${element.data().age}</td>
            <td>${element.data().gender}</td>
            <td>${element.data().status}</td>
            <td>
   
            <a href="" onclick="deleteUser"($element.id)>Delete</a>
            <a href="">Edit</a>
            </td>
        </tr>
        `;
    });
    list.insertAdjacentHTML('beforeend',result);

});
function deleteUser(userID){
    database.collection("person").doc(userID).delete();

}
