<<<<<<< HEAD
function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
=======
function getFirstSelector(selector) {
  const list = document.querySelector('ul')
  return list
}

function nestedTarget(x) {
  const lis = document
    .getElementById('nested')
    .querySelectorAll('div.target');
>>>>>>> b50221384360cbb6bf9b4f230236912e621a770c
}
