let list_homework = document.querySelector(".list_homework");
let list_classwork = document.querySelector(".list_classwork");

for (let i = 0; i < 36; i++) {
  list_homework.innerHTML += `  <div class = "item">
                                    <h2 class="item_number">${i}</h2>
                                    <a id="attach_file_a" href="#">
                                        <span class="material-icons attach_icon">attach_file</span>
                                    </a>
                                    <a  href="#">
                                        <div class="attach_file">
                                            файл ${i}
                                        </div>
                                    </a>
                                </div>
                                <hr size=""/>`;
  list_classwork.innerHTML += `<div class = "item">
                                    <h2 class="item_number">${i}</h2>
                                    <a id="attach_file_a" href="#">
                                        <span class="material-icons attach_icon">attach_file</span>
                                    </a>
                                    <a  href="#">
                                        <div class="attach_file">
                                            файл ${i}
                                        </div>
                                    </a>
                                    </div>
                                    <hr size=""/>`;
}
