// github-info
export const loadGitHubInfo = (userName:string , callback: ({}:any) => void ) => {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 ){
            if(xhr.status == 200 || xhr.status == 201) {
                callback(JSON.parse(xhr.responseText));
            }
        }
    }

    xhr.open("GET", `https://api.github.com/users/${userName}`);

    // header
    const githubApi = {};
    // @ts-ignore
    githubApi.header = {}; 
    // @ts-ignore
    githubApi.header.Accept = "application/vnd.github.v3+json"; 
    // @ts-ignore
    for(const key in githubApi.header) {
        // @ts-ignore
        xhr.setRequestHeader(key, githubApi.header[key]);
    }

    xhr.send(null);
}