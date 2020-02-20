new Vue({
	el: '#todos',
	data: {
		currentTask: '',
		curDate: '',
		curTime: '',
		tasks: [
			{
				text: '',
				date_now: '',
				time_now: '',
				time_add: '',
				isComplited: false
		}
			]
	},
	methods: {
		addTask: function (ev) {
			this.tasks.push({
				text: this.currentTask,
				date_now: ' Выполнить до ' + this.curDate,
				time_now: this.curTime,
				time_add: ' Задача создана: ' + new Date(),
				isComplited: false
			});
			this.currentTask = '';
			this.curDate = '';
			this.curTime = '';

		},
		removeTask: function (taskText) {
			this.tasks = this.tasks.filter(task => {
				return task.text !== taskText;
			})
		},
		changeEdit: function (taskText) {
			this.editVal = taskText;
			this.tasks = this.tasks.map(task => {
				if (task.text === taskText) {
					task.isEdit = !task.isEdit;
				}
				return task;
			})
		},
		editTask: function (taskText) {
			this.tasks = this.tasks.map(task => {
				if (task.text === taskText) {
					task.isEdit = task.isEdit;
					task.text = this.editVal;
				}
				return task;
			})
		}
	}
})