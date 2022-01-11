export  const  obtainArticleService = async function (artParam) {
        return await fetch("https://raymessinadesign.com/blog/new_blog_service.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "s=" + artParam
        })
        .then(resp => resp.status === 200 ? resp.text() : null)
        .then(resp => {
            return resp !== "404" ? { success: true, post: resp } : { success: false  }
        })
        .catch((err) => {
            return  {success: false,  err }
    });
}

export  const obtainListService= async function () {
        return await fetch("https://raymessinadesign.com/blog/blog_registry.php")
            .then(resp => resp.status === 200 ? resp.json() : null)
            .then(resp => {
                     return resp && resp.length  ? { success: true, list: resp } : { success: false }
             })
            .catch((err) => {
                return  {success: false,  err }
        });
}