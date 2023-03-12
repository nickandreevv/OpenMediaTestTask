const first = document.getElementById('first-switch-element');
const second = document.getElementById('second-switch-element');

const elems = Array.from(document.getElementsByClassName('wrapper__bottom--table-element'));

const first_content = [
    {
        label: 'OS + apps',
        value: 'Unix/OSX + docker + nvidia-docker',
    },
    {
        label: 'Free space',
        value: '100 GB of free space',
    },
    {
        label: 'CPU',
        value: '4 cores or more (e.g. intel core i5)',
    },
    {
        label: 'Graphics hardware',
        value: 'GPU: NVidia only 2Gb+',
    },
    {
        label: 'Memory',
        value: '16 GB RAM',
    },
]

const second_content = [
    {
        label: 'Instance',
        value: 'g4dn.xlarge',
    },
    {
        label: 'Memory',
        value: '16 GB RAM',
    },
    {
        label: 'GPU',
        value: '1',
    },
    {
        label: 'Storage',
        value: '125 GB',
    },
    {
        label: 'vCPUs',
        value: '4',
    },
]

const fillContent = (arr) => {
    elems.forEach((e, index) => {
        e.children[0].innerText = arr[index].label
        e.children[1].innerText = arr[index].value
    })
}

const onFirstClick = () => {
    if(first.classList.contains('active')) {
        return;
    }
    first.classList.add('active');
    second.classList.remove('active');
    fillContent(first_content);
}

const onSecondClick = () => {
    if(second.classList.contains('active')) {
        return;
    }
    second.classList.add('active');
    first.classList.remove('active');
    fillContent(second_content);
}

first.addEventListener('click', onFirstClick);
second.addEventListener('click', onSecondClick);