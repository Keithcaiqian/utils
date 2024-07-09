export class UndoManager<T> {
	public currentData: T | undefined; //当前数据
	public maxStep = 20; //储存步数
	public undoQueue: T[] = []; //撤销队列
	public redoQueue: T[] = []; //回退队列
    public onChange?: (undoQueue: T[], redoQueue: T[], currentData: T) => void; //队列改变的监听

	constructor(options: { currentData: T; maxStep?: number; onChange?: (undoQueue: T[], redoQueue: T[], currentData: T) => void }) {
		this.currentData = options.currentData;
        if (options.maxStep) {
			this.maxStep = options.maxStep;
		}
        if (options.onChange) {
			this.onChange = options.onChange;
		}
	}

	// 储存数据
	setData(data: T) {
        this.undoQueue.push(this.currentData!);
        if (this.undoQueue.length > this.maxStep) {
            this.undoQueue.shift();
        }
        this.redoQueue = [];
		this.currentData = data;
		this.onChange?.(this.undoQueue, this.redoQueue, this.currentData); 
	}

	// 撤销
	undo() {
		if (this.undoQueue.length === 0) return false;
		this.redoQueue.push(this.currentData!);
		const snap = this.undoQueue.pop();
		this.currentData = snap;
		this.onChange?.(this.undoQueue, this.redoQueue, this.currentData!);
        return this.currentData;
	}

	// 回退
	redo() {
		if (this.redoQueue.length === 0) return false;
		this.undoQueue.push(this.currentData!);
		const snap = this.redoQueue.pop();
		this.currentData = snap;
		this.onChange?.(this.undoQueue, this.redoQueue, this.currentData!);
        return this.currentData;
	}
}

// react中使用
export class RUndoManager<T> {
	public maxStep = 20; //储存步数
	public undoQueue: T[] = []; //撤销队列
	public redoQueue: T[] = []; //回退队列
	public onChange?: (undoQueue: T[], redoQueue: T[]) => void; //队列改变的监听

	constructor(options?: { maxStep?: number; onChange?: (undoQueue: T[], redoQueue: T[]) => void }) {
		if (options?.maxStep) {
			this.maxStep = options.maxStep;
		}
		if (options?.onChange) {
			this.onChange = options.onChange;
		}
	}

	// 储存数据
	setData(data: T) {
		this.undoQueue.push(data);
		if (this.undoQueue.length > this.maxStep) {
			this.undoQueue.shift();
		}
		this.redoQueue = [];
		this.onChange?.(this.undoQueue, this.redoQueue);
	}

	// 撤销
	undo(data: T) {
		if (this.undoQueue.length === 0) return false;
		this.redoQueue.push(data);
		const snap = this.undoQueue.pop();
		this.onChange?.(this.undoQueue, this.redoQueue);
		return snap;
	}

	// 回退
	redo(data: T) {
		if (this.redoQueue.length === 0) return false;
		this.undoQueue.push(data);
		const snap = this.redoQueue.pop();
		this.onChange?.(this.undoQueue, this.redoQueue);
		return snap;
	}
}