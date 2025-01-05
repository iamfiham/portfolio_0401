import StacksContent from '../components/StacksContent';

function Stacks() {
    return (
        <div className='grid grid-cols-[3fr_4fr] gap-12 items-start'>
            <div></div>
            <StacksContent />
        </div>
    );
}

export default Stacks;
