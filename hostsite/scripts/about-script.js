let group_members_data = [
    {
        full_name: "Aline Victoria da Cruz Ferreira Pinheiro",
        rm: "86295"
    },
    {
        full_name: "Inara Galvão Mendes",
        rm: "83053"
    },
    {
        full_name: "Lucas Henrique Ferreira Bonfim",
        rm: "86287"
    }
];

var member_index = 0;

function goUpMembers(){
    if(member_index < group_members_data.length - 1)
        member_index++
    else
        member_index = 0

    let {full_name, rm} =  group_members_data[member_index]

    setGroupMember(full_name, rm)
}

function goDownMembers(){
    if(member_index > 0)
        member_index--
    else
        member_index = group_members_data.length - 1

    let {full_name, rm} =  group_members_data[member_index]

    setGroupMember(full_name, rm)
}

function setGroupMember(full_name, rm){
    let member_name_el = document.getElementById("group-member-name");
    let member_rm_el = document.getElementById("group-member-rm");

    member_name_el.innerText = full_name
    member_rm_el.innerText = `RM ${rm}`
}