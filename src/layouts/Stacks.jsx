import StacksContent from '../components/StacksContent';

function Stacks() {
    return (
        <div className='grid grid-cols-[4fr_3fr] gap-12 items-start'>
            <StacksContent />
            <div></div>
        </div>
    );
}

export default Stacks;
