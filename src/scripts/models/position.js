module.exports = {
    get({pageNo=2,pageSize=15}){
        return $.ajax({
            url:`/api/listmore.json?pageNo=${pageNo}&pageSize=${pageSize}`,
        })
    }
}