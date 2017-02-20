$(document).ready(function(){
    $('.deleteUser').on('click', deleteUser);
});
//update user
$(document).ready(function(){
    $('.updateUser').on('click', updateUser);
});

function deleteUser()
{
    var confirmation = confirm('are you sure');
    if(confirmation)
    {
        $.ajax({
            type: 'DELETE',
            url: '/users/delete/'+$(this).data('id')
        }).done(function(response){
            window.location.replace('/');
        });
    }
    else
    {
        return false;
    }
}

function updateUser()
{
    $.ajax({
        type:'PUT',
        url: '/users/update/'+$(this).data('id')
    }).done(function(response){
        window.location.replace('/');
    });
}